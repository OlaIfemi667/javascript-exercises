const repeatString = function(mot, nombre) {

    if (nombre < 0)
        return 'ERROR'
    let repMot='';
    for(let i = 0; i < nombre; i++)
    {
        repMot+=mot;
    }
    return repMot;
};

// Do not edit below this line
module.exports = repeatString;
