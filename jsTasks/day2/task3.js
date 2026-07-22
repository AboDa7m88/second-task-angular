function equalFunc(a, b, c) {
    if (a === b && b === c) {
        return 3;
    } else if (a === b || a === c || b === c) {
        return 2;
    } else {
        return 0;
    }
}

equalFunc(1,2,3); //0
equalFunc(2,2,3); //2
equalFunc(2,2,2); //3