// 1. no-unused-vars ルール
function calculateSum(a, b) {
    const unusedVar = 10; // no-unused-vars: 使われていない変数
    const sum = a + b;
    return sum;
}
calculateSum(1,2);

// 2. no-undef ルール
function printMessage() {
    console.log(message); // no-undef: 'message' が未定義
}
printMessage();

// 3. eqeqeq ルール
function isEqual(x, y) {
    if (x == y) {  // eqeqeq: == を使用
        return true;
    }
    return false;
}
isEqual(1,1);

// 4. no-console ルール
function logMessage(message) {
    console.log(message); // no-console: console.log を使用
}
logMessage('message');

// 5. indent ルール
function greet(name) {
    return 'Hello, ' + name; // indent: インデントが不正
}
greet('Hello World');

// 6. quotes ルール
function sayHello() {
    const greeting = "Hello, World!";  // quotes: ダブルクォート使用
    return greeting;
}
sayHello()

// 7. semi ルール
function getGreeting(name) {
    return 'Hello, ' + name; // semi: セミコロンがない
}
getGreeting('World');

// 8. brace-style ルール
function showMessage(condition) {
    if (condition) { // brace-style: ブレースのスタイルが不正
        console.log('Condition is true');
    }
}
showMessage(true);

// 9. camelcase ルール
function process_data() { // camelcase: スネークケースが使用されている
    const user_name = 'John Doe'; // camelcase: スネークケースが使用されている
    return user_name;
}
process_data();

// 10. no-magic-numbers ルール
function calculateDiscount(price) {
    return price * 0.8; // no-magic-numbers: マジックナンバー 0.8 が使用されている
}
calculateDiscount(100);

// 11. consistent-return ルール
function checkStatus(status) {
    if (status === 'success') {
        return true;
    } else if (status === 'failure') {
        return false;
    } // consistent-return: 一貫性のない return
    // else {    'success' or 'failure' に該当しない場合にundefinedが返されてしまう
    // return null 
    // }
}
checkStatus('success');

// 12. no-var ルール
function displayMessage() {
    const message = 'Hello!';  // `var` が使用されている
    console.log(message);
}
displayMessage();

// 13. complexity ルール
// この関数は複雑すぎるため、complexityルールに引っかかる
function calculate(value) {
    if (value > 10) {
        if (value < 20) {
            if (value % 2 === 0) {
                if (value > 15) {
                    return 'Value is between 16 and 20 and even';
                } else {
                    return 'Value is between 11 and 15 and even';
                }
            } else {
                return 'Value is between 11 and 20 and odd';
            }
        } else {
            if (value < 30) {
                if (value % 2 === 0) {
                    return 'Value is between 21 and 30 and even';
                } else {
                    return 'Value is between 21 and 30 and odd';
                }
            } else {
                return 'Value is greater than 30';
            }
        }
    } else {
        return 'Value is 10 or less';
    }
}
calculate(10);

// 14. prefer-const ルール
function getMessage(name) {
    const message = 'Hello, ' + name; // prefer-const: この変数は再代入されないため、constを使用すべき
    return message;
}
getMessage('hoge');