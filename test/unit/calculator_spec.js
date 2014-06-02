/* global describe, it */

'use strict';

var expect = require('chai').expect;
var traceur = require('traceur');
var Calculator = traceur.require(__dirname + '/../../app/models/calculator.js');

describe('Calculator', function(){

  describe('.add', function() {
    it('should add two numbers and return result', function(){
      var sum = Calculator.add(2,3);
      expect(sum).to.equal(5);
    });
  });


  describe('.subtract', function(){
    it('should subtract two numbers and return result', function(){
      var difference1 = Calculator.subtract(3,2);
      expect(difference1).to.equal(1);

      var difference2 = Calculator.subtract(-4,-2);
      expect(difference2).to.equal(-2);
    });
  });


  describe('.pow', function(){
    it('should exponentiate a base number via exponent', function(){
      var result = Calculator.pow(2,4);
      expect(result).to.equal(16);

      var result2 =Calculator.pow(3,3);
      expect(result2).to.equal(27);
    });
  });


  describe('.sum', function(){
    it('should add up a list of numbers', function(){
      var sum = Calculator.sum([2,5,9]);
      expect(sum).to.equal(16);

      var sum2 = Calculator.sum([2,5]);
      expect(sum2).to.equal(7);

      var sum3 = Calculator.sum([5]);
      expect(sum3).to.equal(5);

    });
  });


  describe('.lcd', function(){
    it('should return lowest common denominator', function(){
      var lcd1 = Calculator.lcd([2,2,5]);
      expect(lcd1).to.equal(10);

      var lcd2 = Calculator.lcd([2,3,5]);
      expect(lcd2).to.equal(30);

      var lcd3 = Calculator.lcd([2,2,2]);
      expect(lcd3).to.equal(2);
    });
  });


  describe('.fractions', function(){
    it('should return the new numerator value array', function(){
      var result = Calculator.fractions([2,2,5], [1,1,1]);
      expect(result).to.eql([6,5]);

      var result2 = Calculator.fractions([2,3,4], [1,1,1]);
      expect(result2).to.eql([13,12]);

    });
  });

});
