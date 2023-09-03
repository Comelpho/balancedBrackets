const brakets = {
    "{": "}",
    "[": "]",
    "(": ")"
}

function checkValidBrakets (str) {
    const acc = []

    if (str) {
        for (let symb of str) {
            if (brakets[symb]) {
                acc.unshift(symb)
            } else if (Object.values(brakets).includes(symb)) {
                if (brakets[acc[0]] == symb) {
                    acc.shift()
                } else {
                    console.log('error braket');
                    return false
                }
            } else {
                console.log('0');
                return false
            }
        }
        if (acc.length == 0) {
            console.log('1');
            return true
        } else if (acc.length > 0) {
            console.log('error braket');
            return false
        }
    } else {
        console.log('err');
        return false
    }
}


