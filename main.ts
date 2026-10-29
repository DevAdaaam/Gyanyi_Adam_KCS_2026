//1.Feladat
function osszesOszto(numbers:number): number[] {
    const divisors : number[] = [];
    for (let i = 1; i <= numbers; i++) {
        if (numbers % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;

}

//2.Feladat
function parosDarab(numb: number[]): number {
    const evenumbers: number[] = [];
    for (let i = 0; i < numb.length; i++) {
        if (numb[i] % 2 === 0) {
            evenumbers.push(numb[i]);
        }
    }
    const quantity = evenumbers.length;
    return quantity;
}

//3.Feladat
function fuggvenyhivasPalindrom(func: () => string): boolean {
    const text = func().replace(/ /g, "").toLowerCase();

    for (let i = 0; i < text.length / 2; i++) {
        if (text[i] !== text[text.length - 1 - i]) {
            return false;
        }
    }

    return true;
}
