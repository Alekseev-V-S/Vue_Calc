let vue = new Vue({
  el: '#app',
  data: {
    result: '',
    operations: ['/'],
    operations1: [7,8,9,'*'],
    operations2: [4,5,6,'-'],
    operations3: [1,2,3,'+'],
    operations4: ['.',0],
  },
  methods: {
    input: function(char) {
      this.result = this.result.toString();
      this.result+=char;
    },
    clear: function() {
      this.result = '';
    },
    back: function() {
      this.result = this.result.slice(0, -1);
    },
    percent: function() {
      this.result = this.result / 100;
    },
    equal: function() {
      this.result = eval(this.result);
    },
    negativ: function() {
      this.result = eval(this.result * -1);
    }
  }
})