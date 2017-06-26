# Entity-Resolution-Example
an example of using ASK entity resolution 

This skill will:
1. Show how entity resolution can be used to resolve a canonical value from a synonym provided by the user.
2. Show how entity resolution can be used to quickly determine if the slot provided by the user is explicitly included in your model as a value or synonym.

## Steps To Create This Example

1. Go to developer.amazon.com and [create a new skill](https://developer.amazon.com/edw/home.html#/skill/create/).
2. Open the Interaction Model and select Skill Builder at the top of the page.
3. Open the Code Editor panel in the top left corner.
4. Paste the contents of [model.json](https://github.com/joseysandoval/Entity-Resolution-Example/blob/master/model.json) into the code editor, replacing the default contents.
5. Go to http://aws,amazon.com and create a new Lambda function, using the "alexa-skill-kit-sdk-factskill" blueprint.
6. Paste the contents of [index.js] into the code tab, replacing the default contents.
7. Test your skill by using an Alexa device or http://echosim.io.  (This won't work with the Service Simulator yet.)
8. Ask the skill "What is a mom?"

## Additional References

1. Learn more about [ASK entity resolution](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/entity-resolution-for-slot-types)
2. Learn more about the [interaction model types node](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/entity-resolution-for-slot-types#slot-type-json)
3. Learn more about the [Entity Resolution intent request]
