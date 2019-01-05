import React from 'react';
import ReactDom from 'react-dom';

export default function AfterSubmit(options) {
    'use strict';
    var Public = this;
    var reactAppElementJSX  =   '';

    Public.doAdd = function() {
        reactAppElementJSX  =   <div>
            <h1 class='text-center'>Addition</h1>
            <p>{options.number1Value} + {options.number2Value} =
                {' '}{options.number1Value + options.number2Value}</p>
        </div>;

        Public.customRender(reactAppElementJSX, options.appendSelector);
    };

    Public.doSub = function() {
        reactAppElementJSX  =   <div>
            <h1 class='text-center'>Subtraction</h1>
            <p>{options.number1Value} - {options.number2Value} =
                {' '}{options.number1Value - options.number2Value}</p>
        </div>;

        Public.customRender(reactAppElementJSX, options.appendSelector);
    };

    Public.doMul = function() {
        reactAppElementJSX  =   <div>
            <h1 class='text-center'>Multiplication</h1>
            <p>{options.number1Value} x {options.number2Value} =
                {' '}{options.number1Value * options.number2Value}</p>
        </div>;

        Public.customRender(reactAppElementJSX, options.appendSelector);
    };

    Public.doDiv = function() {
        reactAppElementJSX  =   <div>
            <h1 class='text-center'>Division</h1>
            <p>{options.number1Value} / {options.number2Value} =
                {' '}{options.number1Value / options.number2Value}</p>
        </div>;

        Public.customRender(reactAppElementJSX, options.appendSelector);
    };

    Public.doMod = function() {
        reactAppElementJSX  =   <div>
            <h1 class='text-center'>Modulus</h1>
            <p>{options.number1Value} % {options.number2Value} =
                {' '}{options.number1Value % options.number2Value}</p>
        </div>;

        Public.customRender(reactAppElementJSX, options.appendSelector);
    };

    Public.doShowMsg = function(msg, appendSelector) {
        reactAppElementJSX = <h1 class='text-center text-danger'>{msg}</h1>;
        Public.customRender(reactAppElementJSX, appendSelector);
    };

    Public.doClear = function() {
        document.getElementById(options.number1Selector).value = '';
        document.getElementById(options.number2Selector).value = '';

        Public.customRender(reactAppElementJSX, options.appendSelector);
    };

    Public.customRender = function(reactAppElementJSX, selectorID) {
        ReactDom.render(
            reactAppElementJSX,
            document.getElementById(selectorID)
        );
    };
}
