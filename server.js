function eventoLoop() {

    let a = 1;
    let b = 2;
    let c = 3;

    console.log(a);

    setInterval(() => {
        console.log(b)
    }, 1);

    console.log(c)
}

eventoLoop();