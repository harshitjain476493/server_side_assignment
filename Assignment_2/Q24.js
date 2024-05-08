const invalidJSONString = '{ "name": "tony", "age": 21, "city": "Indore", }';

try {
    const parsedJSON = JSON.parse(invalidJSONString);
    console.log(parsedJSON);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error("Invalid JSON string:", error.message);
    } else {
        throw error; // rethrow the error if it's not a SyntaxError
    }
}
