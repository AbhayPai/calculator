require('SassPath/index.scss');

import BaseController from 'ControllerPath/BaseController';

import View from 'ViewPath/View';

import ProcessForm from 'LibrariesPath/Modules/ProcessForm';

import * as Utility from 'LibrariesPath/Utilities/Utility';

import AfterSubmit from 'ModelPath/AfterSubmit';

new BaseController().registerController({
    preprocess: function() {
        App.stackedFormData = {
            'submitAddLabel': 'Add',
            'submitSubLabel': 'Sub',
            'submitMulLabel': 'Mul',
            'submitDivLabel': 'Div',
            'submitModLabel': 'Mod',
            'number1Label': 'Number 1',
            'number2Label': 'Number 2',
            'submitClearLabel': 'Clear'
        };
    },

    render: function() {
        new View({
            selectorId: 'form-wrapper',
            templateName: 'calculator',
            templateData: App.stackedFormData
        }).render();
    },

    ready: function() {
        var errorMsg  =   '';
        var processForm = new ProcessForm({
            appendSelector: 'result',
            number1Selector: 'number-1',
            number2Selector: 'number-2',
            submitSubSelector: 'sub-submit',
            submitAddSelector: 'add-submit',
            submitMulSelector: 'mul-submit',
            submitDivSelector: 'div-submit',
            submitModSelector: 'mod-submit',
            submitClearSelector: 'submit-clear'
        });

        processForm.addsubmit = function(recvdEvent) {
            Utility.preventDefault(recvdEvent);

            if (!recvdEvent.srcElement.form[0].valueAsNumber ||
                !recvdEvent.srcElement.form[1].valueAsNumber) {
                errorMsg  =   'Please enter valid details in form.';
                new AfterSubmit({}).doShowMsg(errorMsg,
                    processForm.options.appendSelector);
                return;
            }

            new AfterSubmit({
                appendSelector: processForm.options.appendSelector,
                number1Value: recvdEvent.srcElement.form[0].valueAsNumber,
                number2Value: recvdEvent.srcElement.form[1].valueAsNumber
            }).doAdd();
        };

        processForm.subsubmit = function(recvdEvent) {
            Utility.preventDefault(recvdEvent);

            if (!recvdEvent.srcElement.form[0].valueAsNumber ||
                !recvdEvent.srcElement.form[1].valueAsNumber) {
                errorMsg  =   'Please enter valid details in form.';
                new AfterSubmit({}).doShowMsg(errorMsg,
                    processForm.options.appendSelector);
                return;
            }

            new AfterSubmit({
                appendSelector: processForm.options.appendSelector,
                number1Value: recvdEvent.srcElement.form[0].valueAsNumber,
                number2Value: recvdEvent.srcElement.form[1].valueAsNumber
            }).doSub();
        };

        processForm.mulsubmit = function(recvdEvent) {
            Utility.preventDefault(recvdEvent);

            if (!recvdEvent.srcElement.form[0].valueAsNumber ||
                !recvdEvent.srcElement.form[1].valueAsNumber) {
                errorMsg  =   'Please enter valid details in form.';
                new AfterSubmit({}).doShowMsg(errorMsg,
                    processForm.options.appendSelector);
                return;
            }

            new AfterSubmit({
                appendSelector: processForm.options.appendSelector,
                number1Value: recvdEvent.srcElement.form[0].valueAsNumber,
                number2Value: recvdEvent.srcElement.form[1].valueAsNumber
            }).doMul();
        };

        processForm.divsubmit = function(recvdEvent) {
            Utility.preventDefault(recvdEvent);

            if (!recvdEvent.srcElement.form[0].valueAsNumber ||
                !recvdEvent.srcElement.form[1].valueAsNumber) {
                errorMsg  =   'Please enter valid details in form.';
                new AfterSubmit({}).doShowMsg(errorMsg,
                    processForm.options.appendSelector);
                return;
            }

            new AfterSubmit({
                appendSelector: processForm.options.appendSelector,
                number1Value: recvdEvent.srcElement.form[0].valueAsNumber,
                number2Value: recvdEvent.srcElement.form[1].valueAsNumber
            }).doDiv();
        };

        processForm.modsubmit = function(recvdEvent) {
            Utility.preventDefault(recvdEvent);

            if (!recvdEvent.srcElement.form[0].valueAsNumber ||
                !recvdEvent.srcElement.form[1].valueAsNumber) {
                errorMsg  =   'Please enter valid details in form.';
                new AfterSubmit({}).doShowMsg(errorMsg,
                    processForm.options.appendSelector);
                return;
            }

            new AfterSubmit({
                appendSelector: processForm.options.appendSelector,
                number1Value: recvdEvent.srcElement.form[0].valueAsNumber,
                number2Value: recvdEvent.srcElement.form[1].valueAsNumber
            }).doMod();
        };

        processForm.clearsubmit = function(recvdEvent) {
            Utility.preventDefault(recvdEvent);

            new AfterSubmit({
                appendSelector: processForm.options.appendSelector,
                number1Selector: processForm.options.number1Selector,
                number2Selector: processForm.options.number2Selector
            }).doClear();
        };
    }
});
