const numbers = [7, 1, 9, 5, 3, 2, 6, 4, 8];

sortNumbers(numbers);
console.log(numbers);

function sortNumbers(numbers: number[]) {
  let swapped: boolean;
  let numberOfSortedElement = 0;
  do {
    swapped = false;
    for (let i = 0; i < numbers.length - 1 - numberOfSortedElement; i++) {
      const j = i + 1;
      if (numbers[j] < numbers[i]) {
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
        swapped = true;
      }
    }

    numberOfSortedElement++;
  } while (swapped);
}

