// ! Пример работы метода split() он записывает даные строки в массив

const str = prompt('', '');
const produts = str.split(", ");
console.log(produts);

const A = [2, 4, 7, 89, 47, 65]

function LinearSearch(t, A) // t - искомый элемент,
{ // A - массив, в котором ищем.
    var n = A.length,
        i = 0;

    A[n] = t;

    while (A[i] !== t) i++;

    if (i < n) {
        console.log(i);
        return i;

    } else {

        return -1;
    } // Если искомого элемента нет в массиве, то -1.
}
LinearSearch(47, A);