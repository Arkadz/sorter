class Sorter {
    constructor() {
      this.arr = [];
      this.compare = function (left, right) {
        return left - right;
      }
    }
  
    add(element) {
      this.arr.push(element);
    }
  
    at(index) {
      return this.arr[index];
    }
  
    get length() {
      return this.arr.length;
    }
  
    toArray() {
      return this.arr;
    }
  
    sort(indices) {
      var temp;
      var i;
      var j;
      var val;
      for(i = 0; i < indices.length - 1; i++) {
        for(j = i; j < indices.length; j++) {
          val = indices[i] > indices[j] ? -1 : 1;
          
          if( 
            (this.compare(this.arr[indices[i]], this.arr[indices[j]])) * val  > 0 
            ){
            temp = this.arr[indices[i]];
            this.arr[indices[i]] = this.arr[indices[j]];
            this.arr[indices[j]] = temp;
          }
        }
      }
    }
  
    setComparator(compareFunction) {
      this.compare = compareFunction;
    }
  }
  

module.exports = Sorter;