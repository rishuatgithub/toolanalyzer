
app.controller('evaluatePointCntrl', function($scope, $window){

    //DOM element on init
    $window.document.getElementById('chat').focus();
    $scope.wait="N";

    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'us-west-2'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    	IdentityPoolId: 'us-west-2:889731c1-c3de-47cf-b72f-8a0d1441624b',
    });

    var lexruntime = new AWS.LexRuntime();
    var lexUserId = 'ta-chatbot' + Date.now();
    var sessionAttributes = {};

    $scope.pushChat = function() {

    	// if there is text to be sent...
    	var chatText = $window.document.getElementById('chat');

    	if (chatText && chatText.value && chatText.value.trim().length > 0) {

            // disable input to show we're sending it
    		var chat = chatText.value.trim();
    		chatText.value = '';
    		chatText.placeholder='';
    		chatText.locked = true;

    		// send it to the Lex runtime
    		var params = {
    			botAlias: '$LATEST',
    			botName:  'ToolAnalyser',
    			inputText: chat,
    			userId: lexUserId,
    			sessionAttributes: sessionAttributes
    		};

    		$scope.showRequest(chat);

    		lexruntime.postText(params, function(err, data) {

    			if (err) {
    				console.log(err, err.stack);
    				$scope.showError('Error:  ' + err.message + ' (see console for details)')
    			}

    			if (data) {
    				// capture the sessionAttributes for the next cycle
    				sessionAttributes = data.sessionAttributes;
    				// show response and/or error/dialog status
    				$scope.showResponse(data);

    			}

    			// re-enable input
    			chatText.value = '';
    			chatText.locked = false;

    		});
    	}
    		// we always cancel form submission
    		return false;
    }

    $scope.showRequest = function (daText) {

    	var conversationDiv = $window.document.getElementById('conversation');
    	var requestPara = document.createElement("P");
    	requestPara.className = 'userRequest';
    	requestPara.appendChild(document.createTextNode(daText));
    	conversationDiv.appendChild(requestPara);
    	conversationDiv.scrollTop = conversationDiv.scrollHeight;
    }

    $scope.showError = function (daText) {

    	var conversationDiv = $window.document.getElementById('conversation');
    	var errorPara = document.createElement("P");
    	errorPara.className = 'lexError';
    	errorPara.appendChild(document.createTextNode(daText));
    	conversationDiv.appendChild(errorPara);
    	conversationDiv.scrollTop = conversationDiv.scrollHeight;
    }

    $scope.showResponse = function (lexResponse) {

    	var conversationDiv = $window.document.getElementById('conversation');
    	var responsePara = document.createElement("P");
    	responsePara.className = 'lexResponse';

    	if (lexResponse.message) {
    		responsePara.appendChild(document.createTextNode(lexResponse.message));
    		responsePara.appendChild(document.createElement('br'));
    	}

    	if (lexResponse.dialogState === 'ReadyForFulfillment') {
    		responsePara.appendChild(document.createTextNode('Ready for fulfillment'));
    		//TODO:  show slot values
    	}

    	conversationDiv.appendChild(responsePara);
    	conversationDiv.scrollTop = conversationDiv.scrollHeight;
    }

});