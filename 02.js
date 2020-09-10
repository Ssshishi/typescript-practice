var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isDone = false;
var createdByNewBoolean = new Boolean(1);
// boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
//  ES6 中的二进制和八进制表示法 会被编译为十进制数字
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ". I'll be " + (myAge + 1) + " years old next month.";
//  ` 用来定义 ES6 中的模板字符串，${expr} 用来在模板字符串中嵌入表达式
var u = undefined;
var n = null;
// 使用 null 和 undefined 来定义这两个原始数据类型
// undefined 和 null 是所有类型的子类型
// 这样不会报错
var num = undefined;
// 这样也不会报错
var num1 = u;
// void 类型的变量不能赋值给 number 类型的变量
var v;
//   let num3: number = v; 会报错
// 任意值（Any）用来表示允许赋值为任意类型
// 如果是一个普通类型，在赋值过程中改变类型是不被允许的
// 如果是一个普通类型，在赋值过程中改变类型是不被允许的
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// 在任意值上访问任何属性都是允许的
var anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
// 允许调用任何方法
var anyThing1 = 'Tom';
anyThing1.setName('Jerry');
anyThing1.setName('Jerry').sayHello();
anyThing1.myName.setFirstName('Cat');
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
var something;
something = 'seven';
something = 7;
something.setName('Tom');
var myFavoriteNumber1 = 'seven';
//  类型推论  会认为是 let myFavoriteNumber: string = 'seven';
// 联合类型（Union Types）表示取值可以为多种类型中的一种
var myFavoriteNumber2;
myFavoriteNumber2 = 'seven';
myFavoriteNumber2 = 7;
// 只能访问此联合类型的所有类型里共有的属性或方法：
function getString1(something) {
    return something.toString();
    // tostring()在 字符串和数值型中都有
}
// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
var myFavoriteNumber3;
myFavoriteNumber3 = 'seven';
console.log(myFavoriteNumber3.length); // 5
var tom = {
    name: 'Tom',
    age: 25
};
// age 可选 可不选
var tim = {
    name: 'Tom'
};
var mim = {
    name: 'Tom',
    age: 21
};
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
var mum = {
    name: 'Tom',
    gender: 'male'
};
var tod = {
    // 只能在创建的时候赋值 不能在其他时候赋值
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
//只能在创建的时候赋值 不能在其他时候赋值 tod.id = 9527;
// 数组的类型  
// 「类型 + 方括号」表示法
var fibonacci = [1, 1, 2, 3, 5];
// 数组的项中不允许出现其他的类型
// 数组泛型
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
var fibonacci1 = [1, 1, 2, 3, 5];
var fibonacci2 = [1, 1, 2, 3, 5];
// 类数组
// 类数组（Array-like Object）不是数组类型，比如 arguments
// arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口
function sum() {
    var args = arguments;
}
// any 在数组中的应用
var list = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
// 函数的类型
function plus(x, y) {
    return x + y;
}
// 输入多余的（或者少于要求的）参数，是不被允许的：
plus(1, 2);
// 函数表达式
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 可选参数 用 ? 表示可选的参数   可选参数后面不允许再出现必需参数了
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var edm = buildName('Tom');
// 参数默认值  TypeScript 会将添加了默认值的参数识别为可选参数：
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var tat = buildName('Tom', 'Cat');
var rom = buildName('Tom');
// 剩余参数 ...rest 参数只能是最后一个参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function isFish(animal) {
    // animal 中 Cat 和Fish  必须将animal 断言成 Fish 才能拥有swim属性
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
function swim(animal) {
    // 隐藏了 animal 可能为 Cat 的情况，将 animal 直接断言为 Fish 了，而 TypeScript 编译器信任了我们的断言，故在调用 swim() 时没有编译错误。
    animal.swim();
}
function isApiError(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
// ApiError 和 HttpError 此时不是一个真正的类，只是一个接口，不是真正的只，在编译结果中会被删除，无法用instanceod来做运行时的判断了
// 此时就只能用类型断言，通过判断是否存在 code 属性，来判断传入的参数是不是 ApiError 了 
// 将任何一个类型断言为 any
// 当我们引用一个在此类型上不存在的属性或方法时，就会报错  因此需要在断言
window.foo = 1;
function testAnimal(animal) {
    return animal;
}
function testCat(cat) {
    return cat;
}
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handleEvent(ele, event) {
    // do something
}
// 元组
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
var rit;
rit[0] = 'Tom';
rit[1] = 25;
rit[0].slice(1);
rit[1].toFixed(2);
// 枚举
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
var direction = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
// 类的用法
// public private 和 protected
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    return Animal1;
}());
var a1 = new Animal1('Jack');
console.log(a1.name); // Jack
a1.name = 'Tom';
console.log(a1.name); // Tom
//   abstract 用于定义抽象类和其中的抽象方法  
// 抽象类是不允许被实例化的
// 抽象类中的抽象方法必须被子类实现：
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name1 = name;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sayHi = function () {
        console.log("Meow, My name is " + this.name1);
    };
    return Cat;
}(Animal));
var cat = new Cat('Tom');
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('Car alert');
    };
    Car.prototype.lightOn = function () {
        console.log('Car light on');
    };
    Car.prototype.lightOff = function () {
        console.log('Car light off');
    };
    return Car;
}());
var Car1 = /** @class */ (function () {
    function Car1() {
    }
    Car1.prototype.alert = function () {
        console.log('Car alert');
    };
    Car1.prototype.lightOn = function () {
        console.log('Car light on');
    };
    Car1.prototype.lightOff = function () {
        console.log('Car light off');
    };
    return Car1;
}());
//接口 继承 类
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
// 泛型  
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']
// 它并没有准确的定义返回值的类型： Array<any> 允许数组的每一项都为任意类型
// 泛型 
// 在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了
function createArray1(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray1(3, 'x'); // ['x', 'x', 'x']
// 多个类型参数
// 定义泛型的时候，可以一次定义多个类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]
function reverse1(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
