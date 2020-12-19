(function(){
    'use strict';
    //noinspection JSUnresolvedFunction
    angular.module("resumeApp",[])
        .directive('focusInput', function($timeout) {
      return {
        link: function(scope, element) {
          element.bind('click', function() {
            $timeout(function() {
              element.parent().parent().find('input')[0].focus();
          });
        });
      }
  };
}).controller('terminalController',['$scope', '$sce', function($scope, $sce) {

    var skills="";
    skills += "<p>Methodologies<\/p>";
    skills += "<ul>";
    skills += " <li>UVM<\/li>";
    skills += "<\/ul>";
    skills += "<p>Enviroments<\/p>";
    skills += "<ul>";
    skills += " <li>Linux<\/li>";
    skills += " <li>Windows<\/li>";
    skills += " <li>Cli<\/li>";
    skills += "<\/ul>";
    skills += "<p>ProgrammingLanguages<\/p>";
    skills += "<ul>";
	skills += " <li>Python<\/li>";
    skills += " <li>C++<\/li>";
    skills += " <li>SystemVerilog<\/li>";
    skills += " <li>Verilog<\/li>";
	skills += " <li>Shell<\/li>";
	skills += " <li>Make<\/li>";
	skills += " <li>TCL<\/li>";
    skills += "<\/ul>";
    skills += "<p>Tools<\/p>";
    skills += "<ul>";
    skills += " <li>Git<\/li>";
    skills += " <li>BitBucket<\/li>";
    skills += " <li>svn<\/li>";
	skills += " <li>pip<\/li>";
    skills += " <li>npm<\/li>";
    skills += "<\/ul>";
    skills += "<p>SoC boards<\/p>";
    skills += "<ul>";
    skills += " <li>Raspberry Pi 3B+<\/li>";
    skills += "<\/ul>";
    skills += "<p>Learning<\/p>";
    skills += "<ul>";
    skills += " <li>Computer Architecture<\/li>";
    skills += " <li>RISC Processor Design<\/li>";
	skills += " <li>State Machine IP Design<\/li>";
	skills += " <li>SoC Design & Verification<\/li>";
    skills += "<\/ul>";
    
    var about="";
    about += "<p>I love to learn new technology in any domain and share my knowledge with colleagues.<br>I have the habit of improvising , to take the best out of everything , most predominantly in technology. I really think I still have more to learn and I think I will never abide at what I already know.<\/p>";
    var experience="";
    experience += "<p><strong>Samsung Semiconductor India R&D <\/strong><br>";
    experience += "                <i>Senior SoC Design Verification Engineer<\/i><br>";
    experience += "                July 2019 – Present<\/p>";
    experience += "";
    experience += "";
    experience += "<p><strong>Group Five Software<\/strong><br>";
    experience += "                <i>Junior PHP Developer<\/i><br>";
    experience += "                Febr 2016 – Aug 2017<\/p>";
    experience += "                <p>Group Five Software is a small company that develops big projects.<\/p>";
    experience += "                <p>Here I managed too work on a project from it's beginnings and I learned a lot from it .<\/p>";


    var education="<p><strong>FSEGA<\/strong - Facultatea de Stiinte Economice si Gestiunea Afacerilor, <strong>Universitatea Babes Bolyai<\/strong>, Cluj- Napoca.<\/p>";

    education += "<p>Information Technologies and Economics , Bachelor (3)<\/p>";
    education += "<p>October 2016 - Present<\/p>";
    education += "";
    
    var help= "<p>Availble comands:<\/p> <ul><li>help<\/li><li>clear<\/li><li>about<\/li><li>experience<\/li><li>education<\/li><li>skills<\/li><li>contact<\/li><li>download<\/li><\/ul>";
    help += "";
    
    var contact= "<p>mob: <a href=\"mob:91-8335805583\">91-8335805583<\/a><\/p><p>eMail: <a href=\"mailto:sohammondal39@gmail.com\">sohammondal39@gmail.com<\/a><\/p> ";
    
    var availble= " : command not found.<br> Please enter an availble command <br> Run `help` for commands.<\/p>";

    var no_history= "<p>you don't have any previous command runned</p>";
    $scope.array = [];
    var history_commands = [];
    
    $scope.dothis = function(){
        if ($scope.read.toLowerCase() == 'about') {
            $scope.array.push([about,$scope.read]);
            history_commands.push($scope.read);
            $scope.read = '';
            
        }else if ($scope.read.toLowerCase() == 'experience') {
            $scope.array.push([experience,$scope.read]);
            history_commands.push($scope.read);
            $scope.read = '';
            
        }else if ($scope.read.toLowerCase() == "skills"){
            $scope.array.push([skills,$scope.read]);
            history_commands.push($scope.read);
            $scope.read = '';
            
        }else if($scope.read.toLowerCase() == 'clear'){
            $scope.array = [];
            $scope.array.push(['',$scope.read]);
            history_commands.push($scope.read);
            $scope.read = '';
            
        }else if($scope.read.toLowerCase() == ''){
            $scope.array.push(['',$scope.read]);
            $scope.read = '';
            
        }else if ($scope.read.toLowerCase() == 'education') {
            $scope.array.push([education,$scope.read]);
            history_commands.push($scope.read);
            $scope.read = '';
            
        }else if ($scope.read.toLowerCase() == 'help') {
            $scope.array.push([help,$scope.read]);
            history_commands.push($scope.read);
            $scope.read = '';
            
        }else if($scope.read.toLowerCase() == 'contact'){
            $scope.array.push([contact,$scope.read]);
            history_commands.push($scope.read);
            $scope.read = '';
            
        }else if($scope.read.toLowerCase() == 'download'){
            $scope.array.push(['',$scope.read]);
            window.open('CurriculumVitae.pdf', '_blank', 'fullscreen=yes');
            $scope.read = '';
            
        }else {
            $scope.array.push(['<p>'+$scope.read+availble,$scope.read]);
            history_commands.push($scope.read);
            $scope.read = '';
            
        }
    };
    $scope.renderHtml = function(html_code)
    {
        //noinspection JSUnresolvedFunction
        return $sce.trustAsHtml(html_code);
    };
}]);
})();
