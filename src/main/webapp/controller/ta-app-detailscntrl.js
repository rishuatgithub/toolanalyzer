var details_data=[
    { level1id:1, level1:"Integration", level2:"Data Access Integration", level3:"Data Sources", weight:"25%", t1:5.00, t2:5.00, t3:4.00, t4:3.00, t5:2.50 },
    { level1id:1, level1:"Integration", level2:"Data Access Integration", level3:"Data Middleware", weight:"25%", t1:5.00, t2:5.00, t3:4.00, t4:3.00, t5:2.50 },
    { level1id:2, level1:"Analysis", level2:"OLAP", level3:"OLAP Engine", weight:"25%", t1:5.00, t2:5.00, t3:4.20, t4:3.00, t5:2.50 },
    { level1id:2, level1:"Analysis", level2:"OLAP", level3:"OLAP Frontend", weight:"25%", t1:5.00, t2:5.00, t3:4.00, t4:3.20, t5:2.50 },
    { level1id:2, level1:"Analysis", level2:"Query", level3:"Query Engine", weight:"25%", t1:5.00, t2:5.00, t3:4.00, t4:3.00, t5:2.50 },
    { level1id:3, level1:"Content Delivery & Management", level2:"Report Development", level3:"Design Complexity", weight:"25%", t1:5.00, t2:5.00, t3:4.00, t4:3.00, t5:2.50 },
    { level1id:3, level1:"Content Delivery & Management", level2:"Adhoc Query", level3:"Self Service Usability", weight:"25%", t1:5.00, t2:5.00, t3:4.00, t4:3.00, t5:2.50 },
    { level1id:4, level1:"Usability", level2:"Ease of Use", level3:"End user report formatting", weight:"25%", t1:5.00, t2:5.00, t3:4.00, t4:3.00, t5:2.50 },
    { level1id:4, level1:"Usability", level2:"Ease of Use", level3:"Offline Use", weight:"25%", t1:5.00, t2:5.00, t3:4.00, t4:3.00, t5:2.50 },
];

app.controller('detailscntrl', function($scope){

    $scope.detailsdata=details_data;

});