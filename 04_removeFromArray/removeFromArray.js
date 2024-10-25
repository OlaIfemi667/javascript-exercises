const removeFromArray = function(array, ...args) {
    let new_array=[]

    for ( elem of array)
    {
        if(!args.includes(elem))
        {
            new_array.push(elem);
        }
        
    }
    return new_array;
};
// Do not edit below this line
module.exports = removeFromArray;

