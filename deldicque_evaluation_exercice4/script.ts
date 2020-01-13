let fruits: string[] = ['Apple', 'Orange','Orange', 'Banana','Banana','Orange'];

function isSingle(array: string[], word: string) {
  let i: number = 0;
  let currentElement: string;
  let countElement: number = 0;
  while (i < array.length && countElement<2) {
    currentElement = array[i];
    if(currentElement == word){
      countElement++;
      if (countElement == 2){
        return true;
      }
    }
    i++;
  }
  return false;
}
