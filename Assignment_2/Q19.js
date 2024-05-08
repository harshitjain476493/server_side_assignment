function timeConvert(minutes) {
    // Calculate the number of hours and remaining minutes
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    // Construct the result string
    let result = minutes + " minutes = ";
    if (hours > 0) {
        result += hours + " hour(s) ";
    }
    if (remainingMinutes > 0) {
        result += "and " + remainingMinutes + " minute(s)";
    }

    return result;
}

// Example usage:
console.log(timeConvert(211)); // Output: "211 minutes = 3 hour(s) and 31 minute(s)."
