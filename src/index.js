import $ from "jquery";

import './index.css';
import './index.less';

$(function () {
    // :odd 偶数
    $('li:odd').css('backgroundColor', 'red');
    // :even 奇数
    $('li:even').css('backgroundColor', 'pink');
})

class Person {
    static info = "person info";
}

console.log(Person.info);