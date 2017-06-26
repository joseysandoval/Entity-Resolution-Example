/* This code has been generated from your interaction model

/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the contents as the code for a new Lambda function, using the alexa-skill-kit-sdk-factskill template.
// This code includes helper functions for compatibility with versions of the SDK prior to 1.0.9, which includes the dialog directives.



 // 1. Text strings =====================================================================================================
 //    Modify these strings and messages to change the behavior of your Lambda function


var speechOutput;
var reprompt;
var welcomeOutput = "Welcome to the example Entity Resolution Skill. Ask me who your mom, sister, or buddy is.";
var welcomeReprompt = "Ask what is a pal.";
 // 2. Skill Code =======================================================================================================
"use strict";
var Alexa = require('alexa-sdk');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
var speechOutput = '';
var handlers = {
    'LaunchRequest': function () {
          this.emit(':ask', welcomeOutput, welcomeReprompt);
    },
	'AMAZON.HelpIntent': function () {
        speechOutput = '';
        reprompt = '';
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        speechOutput = '';
        this.emit(':tell', speechOutput);
    },
    'AMAZON.StopIntent': function () {
        speechOutput = '';
        this.emit(':tell', speechOutput);
    },
    'SessionEndedRequest': function () {
        speechOutput = '';
        //this.emit(':saveState', true);//uncomment to save attributes to db on session end
        this.emit(':tell', speechOutput);
    },
	"ResolveRelationship": function () {
		var speechOutput = "";
    	//any intent slot variables are listed here for convenience
		var personSlotRaw = this.event.request.intent.slots.person.value;//This is the slot provided by the user
		console.log(personSlotRaw);
		var personSlot = resolveCanonical(this.event.request.intent.slots.person);//This is the resolved value
		console.log(personSlot);

    	if(this.event.request.intent.slots.person.resolutions.resolutionsPerAuthority[0].status.code == "ER_SUCCESS_MATCH"){
    	    speechOutput = "Your "+personSlotRaw+" is a "+personSlot+".  Anything else?";
    	}else{
    	   //if the slot provided by the user is not defined in the values or synonyms
    	    speechOutput = "Sorry, "+personSlotRaw+" is not included in this skill. Anything else?";
    	}
    	
        this.emit(":ask",speechOutput, speechOutput);
    },	
	'Unhandled': function () {
        speechOutput = "The skill didn't quite understand what you wanted.  Do you want to try something else?";
        this.emit(':ask', speechOutput, speechOutput);
    }
};

exports.handler = (event, context) => {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
	//alexa.dynamoDBTableName = 'DYNAMODB_TABLE_NAME'; //uncomment this line to save attributes to DB
    alexa.execute();
};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function resolveCanonical(slot){
    try{
		var canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
	}catch(err){
	    console.log(err.message);
	    var canonical = slot.value;
	};
	return canonical;
};
