const removeFromArray = function(array, element) {
    new_array=[]

    for (elem of array)
    {
        if(elem != element)
            new_array.push(elem);
        else
            console.log(elem+ "is removed");
    }
    return new_array;

};

// Do not edit below this line
module.exports = removeFromArray;
