var _ = require('lodash');

class Calculator{
  static add(x,y){
    return x + y;
  }

  static subtract(x,y) {
    return x - y;
  }

  static pow(base,exp) {
    return Math.pow(base,exp);
  }

  static sum(vals){
    return vals.reduce((prev,curr)=>prev+curr);
  }

  static lcd(denoms) {
    denoms = _.uniq(denoms);
    return denoms.reduce((p,c)=>p*c);
  }

  static fractions(dens, nums) {
    var lcd = Calculator.lcd(dens);
    var newNumerators = dens.map((d,i)=>nums[i]*lcd/d);
    var den = newNumerators.reduce((p,c)=>p+c);
    console.log([den,lcd]);
    var gcd = 1;
    var tmp = lcd < den ? lcd : den;
    tmp = _.range(2,Math.floor(tmp/2)+1);
    tmp.forEach(x=>{
      if(den%x===0 && lcd%x===0) {
        gcd = x;
      }
    });
    return [den/gcd,lcd/gcd];
  }
}

module.exports = Calculator;
