let isDone: boolean = false;
let createdByNewBoolean: Boolean = new Boolean(1);
// boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。


let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
//  ES6 中的二进制和八进制表示法 会被编译为十进制数字


let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}. I'll be ${myAge + 1} years old next month.`;

//  ` 用来定义 ES6 中的模板字符串，${expr} 用来在模板字符串中嵌入表达式

let u: undefined = undefined;
let n: null = null;
// 使用 null 和 undefined 来定义这两个原始数据类型
// undefined 和 null 是所有类型的子类型
// 这样不会报错
let num: number = undefined;
// 这样也不会报错
let num1: number = u;

// void 类型的变量不能赋值给 number 类型的变量
let v: void;
//   let num3: number = v; 会报错

// 任意值（Any）用来表示允许赋值为任意类型
// 如果是一个普通类型，在赋值过程中改变类型是不被允许的
// 如果是一个普通类型，在赋值过程中改变类型是不被允许的
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

// 在任意值上访问任何属性都是允许的
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
// 允许调用任何方法
let anyThing1: any = 'Tom';
anyThing1.setName('Jerry');
anyThing1.setName('Jerry').sayHello();
anyThing1.myName.setFirstName('Cat');
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let something;
something = 'seven';
something = 7 ;
something.setName ('Tom')

let myFavoriteNumber1 = 'seven';
//  类型推论  会认为是 let myFavoriteNumber: string = 'seven';


// 联合类型（Union Types）表示取值可以为多种类型中的一种
let myFavoriteNumber2: string | number;
myFavoriteNumber2 = 'seven';
myFavoriteNumber2 = 7;

// 只能访问此联合类型的所有类型里共有的属性或方法：
function getString1(something: string | number): string {
    return something.toString();
    // tostring()在 字符串和数值型中都有
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

let myFavoriteNumber3: string | number;
myFavoriteNumber3 = 'seven';
console.log(myFavoriteNumber3.length); // 5

// 使用接口（Interfaces）来定义对象的类型 接口一般首字母大写  taro框架中还需要在前面加上I
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
// 赋值的时候，变量的形状必须和接口的形状保持一致。

// 可选属性 不要完全匹配一个形状 ？
interface Person1 {
    name: string;
    age?: number;
}
// age 可选 可不选
let tim: Person1 = {
    name: 'Tom'
};

let mim: Person1 = {
    name: 'Tom',
    age: 21
};

interface Person2 {
    name: string;
    age?: number;
    [propName: string]: any;
}
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
let mum: Person2 = {
    name: 'Tom',
    gender: 'male'
};


interface Person3 {
    //只读  
    readonly id: number; 
    name: string;
    age?: number;
    [propName: string]: any;
}

let tod: Person3 = {
    // 只能在创建的时候赋值 不能在其他时候赋值
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

//只能在创建的时候赋值 不能在其他时候赋值 tod.id = 9527;



// 数组的类型  

// 「类型 + 方括号」表示法
let fibonacci: number[] = [1, 1, 2, 3, 5];
// 数组的项中不允许出现其他的类型

// 数组泛型
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
let fibonacci1: Array<number> = [1, 1, 2, 3, 5];

// 用接口表示数组
interface NumberArray {
    [index: number]: number;
}
let fibonacci2: NumberArray = [1, 1, 2, 3, 5];

// 类数组
// 类数组（Array-like Object）不是数组类型，比如 arguments
// arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

// any 在数组中的应用
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];

// 函数的类型
function plus(x: number, y: number): number {
    return x + y;
}
// 输入多余的（或者少于要求的）参数，是不被允许的：
plus (1,2);

// 函数表达式
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
// 不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

// 用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

// 可选参数 用 ? 表示可选的参数   可选参数后面不允许再出现必需参数了
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let edm = buildName('Tom');

// 参数默认值  TypeScript 会将添加了默认值的参数识别为可选参数：
function buildName1(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tat = buildName('Tom', 'Cat');
let rom = buildName('Tom');

// 剩余参数 ...rest 参数只能是最后一个参数
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);

// 重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}


// 类型断言  手动指定一个值的类型
//  值 as 类型   或者  <类型>值
// 在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 值 as 类型
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    // animal 中 Cat 和Fish  必须将animal 断言成 Fish 才能拥有swim属性
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}

interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function swim(animal: Cat | Fish) {
    // 隐藏了 animal 可能为 Cat 的情况，将 animal 直接断言为 Fish 了，而 TypeScript 编译器信任了我们的断言，故在调用 swim() 时没有编译错误。
    (animal as Fish).swim();
}

// const tom: Cat = {
//     name: 'Tom',
//     run() { console.log('run') }
// };
// 可是 swim 函数接受的参数是 Cat | Fish，一旦传入的参数是 Cat 类型的变量，由于 Cat 上没有 swim 方法，就会导致运行时错误了。
// swim(tom);

// 将一个父类断言为更加具体的子类
interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}
// ApiError 和 HttpError 此时不是一个真正的类，只是一个接口，不是真正的只，在编译结果中会被删除，无法用instanceod来做运行时的判断了
// 此时就只能用类型断言，通过判断是否存在 code 属性，来判断传入的参数是不是 ApiError 了 


// 将任何一个类型断言为 any
// 当我们引用一个在此类型上不存在的属性或方法时，就会报错  因此需要在断言
(window as any).foo = 1;
// 它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any


// 当 Animal 兼容 Cat 时，它们就可以互相进行类型断言了
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

function testAnimal(animal: Animal) {
    return (animal as Cat);
}
function testCat(cat: Cat) {
    return (cat as Animal);
}

// 将 any 断言为一个具体的类型
// 联合类型可以被断言为其中一个类型
// 父类可以被断言为子类
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型
// 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可


// 声明文件必需以 .d.ts 为后缀。


// 全局变量的声明文件主要有以下几种语法：

// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型

// 使用 type 创建类型别名type Name = string;
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

// 类型别名与字符串字面量类型都是使用 type 进行定义
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

// 元组
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
let rit: [string, number];
rit[0] = 'Tom';
rit[1] = 25;

rit[0].slice(1);
rit[1].toFixed(2);


// 枚举
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

// 常数枚举
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
// var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];


// 外部枚举
// 外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型：
declare enum Direction {
    Up,
    Down,
    Left,
    Right
}

let direction = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// 类的用法
// public private 和 protected
class Animal1 {
    public name;
    public constructor(name) {
      this.name = name;
    }
  }
  
  let a1 = new Animal1('Jack');
  console.log(a1.name); // Jack
  a1.name = 'Tom';
  console.log(a1.name); // Tom

//   abstract 用于定义抽象类和其中的抽象方法  
// 抽象类是不允许被实例化的
// 抽象类中的抽象方法必须被子类实现：
abstract class Animal {
    public name1;
    public constructor(name) {
      this.name1 = name;
    }
    public abstract sayHi();
  }
  class Cat extends Animal {
    public sayHi() {
      console.log(`Meow, My name is ${this.name1}`);
    }
  }
  let cat = new Cat('Tom')


//一个类实现多个接口
interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}

// 接口 继承 接口
interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Car1 implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}

//接口 继承 类
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3}


// 泛型  
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
// 它并没有准确的定义返回值的类型： Array<any> 允许数组的每一项都为任意类型

// 泛型 
// 在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了
function createArray1<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray1<string>(3, 'x'); // ['x', 'x', 'x']

// 多个类型参数
// 定义泛型的时候，可以一次定义多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]

// 函数的合并
function reverse1(x: number): number;
function reverse1(x: string): string;
function reverse1(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 接口的合并 合并的属性的类型必须是唯一的：
interface Alarm {
    price: number;
    alert(s: string): string;
}
interface Alarm {
    weight: number;
    alert(s: string, n: number): string;
}
