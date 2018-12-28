var first_block_data=[
    { "widget_title":"Best performing ETL tool - Overall", "widget_tool":"Informatica", "widget_index": 4.95 },
    { "widget_title":"Best performing BI tool - Overall", "widget_tool":"Tableau", "widget_index": 4.75 },
    { "widget_title":"Most trending BA tool", "widget_tool":"Pentaho", "widget_index": 4.65 }
];



app.controller("widgetfirstblockhomectrl", function($scope){
    $scope.firstblockdata=first_block_data;
});

/* component sections */

var second_widget_component_data=[
    { "component":"Integration Fitment", "descr":"Some description", "labels":"'Seibel Analytics','SAS','MSBI','Tableau','Cognos'", "color":"#FDB45C", "data":"4.9,4.8,4.75,4.70,4.50" },
    { "component":"Content Delivery & Development Fitment", "descr":"Some description", "labels":"'Informatica','SAS','MSBI','Tableau','Cognos'", "color":"#FDB45C", "data":"4.9,4.8,4.75,4.70,4.50" },
    { "component":"Analytics Fitment", "descr":"Some description", "labels":"'Seibel Analytics','SAS','MSBI','Tableau','Cognos'", "color":"#FDB45C", "data":"4.9,4.8,4.75,4.70,4.50" },
    { "component":"Usability Fitment", "descr":"Some description", "labels":"'Seibel Analytics','SAS','MSBI','Tableau','Cognos'", "color":"#FDB45C", "data":"4.9,4.8,4.75,4.70,4.50" }
];

app.controller("widgetsecondhomectrl", function($scope){

      $scope.fitment_data=second_widget_component_data;

      //prompt($scope.fitment_data.labels);

      $scope.labels = ['Seibel Analytics','SAS','MSBI','Tableau','Cognos'];
      $scope.colors = ['#FDB45C'];
      $scope.series = ['Series A']
      $scope.data = [
        [4.9,4.8,4.75,4.70,4.50]
      ]

});


/* split wise section */

app.controller("widgetthirdblockhomectrl", function($scope){

      $scope.labels = ["BFS", "COMMUNICATION","MANLOG","X","Y"];
      $scope.data = [300, 500, 100, 40, 120];
      $scope.legend = ["BFS", "COMMUNICATION","MANLOG","X","Y"];
      $scope.options = {legend:
                            {
                                display: true,
                                position: 'right'
                            }

                        };

});