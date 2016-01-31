"use strict";angular.module("untitledApp",["ngAnimate"]),angular.module("untitledApp").controller("MainCtrl",["$scope","questionService",function(a,b){b.get().success(function(b){a.questions=b}),a.showResults=function(){a.results={correctNum:0,incorrectNum:0},angular.forEach(a.questions,function(b){b.answer==b.response?a.results.correctNum++:a.results.incorrectNum++}),a.results.show=!0}}]),angular.module("untitledApp").factory("questionService",["$http",function(a){return{get:function(){return a.get("scripts/data/questions.js")}}}]),angular.module("untitledApp").directive("code",["$timeout",function(a){return{restrict:"A",link:function(b,c,d){b.$last&&a(function(){$("pre code").each(function(a,b){hljs.highlightBlock(b)})})}}}]),angular.module("untitledApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="jumbotron"> <p> Do you think that you know Javascript good enough?<br> Check Your Javascript Knowledge </p> </div> <div class="row"> <div ng-repeat="question in questions" code=""> <h4>{{$index+1}}. {{question.title}}</h4> <pre><code class="javascript">{{question.code}}</code></pre> <div class="form-group" ng-repeat="version in question.versions"> <label> <input type="radio" name="{{question.id}}" ng-model="question.response" value="{{version}}"> {{version}} </label> </div> </div> </div> <button class="btn btn-primary" ng-click="showResults()">Show Results</button> <div class="container"> <h4>Your Results</h4> <div class="row"> <div class="col-sm-4"> {{results.correctNum}} </div> <div class="col-sm-4"> {{results.incorrectNum}} </div> </div> </div>')}]);