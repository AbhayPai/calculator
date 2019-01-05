import * as Utility from 'LibrariesPath/Utilities/Utility';

export default function ProcessForm(options) {
    var Public = this;
    var Prop = Public;

    Public.init = function() {
        Public.setOptions();

        if (Public.selectorsExist()) {
            Public.onSubmit();
        } else {
            /*
                eslint no-console: ["error", { allow: ["warn"] }]
            */
            console.warn(
                'please check the parameters and selectors you have passed in' +
                ' ProcessForm function.'
            );
        }
    };

    Public.setOptions = function() {
        Prop.defaults = {
            appendSelector: null,
            number1Selector: null,
            number2Selector: null,
            submitSubSelector: null,
            submitAddSelector: null,
            submitMulSelector: null,
            submitDivSelector: null,
            submitModSelector: null,
            submitClearSelector: null
        },
        Prop.options = options || {};

        for (var name in Prop.defaults) {
            if (Prop.options[name] === undefined) {
                Prop.options[name] = Prop.defaults[name];
            }
        }

        return Prop.options;
    };

    Public.selectorsExist = function() {
        var flag = true;

        if (!document.getElementById(Prop.options.appendSelector)       ||
            !document.getElementById(Prop.options.number1Selector)      ||
            !document.getElementById(Prop.options.number2Selector)      ||
            !document.getElementById(Prop.options.submitAddSelector)    ||
            !document.getElementById(Prop.options.submitSubSelector)    ||
            !document.getElementById(Prop.options.submitMulSelector)    ||
            !document.getElementById(Prop.options.submitDivSelector)    ||
            !document.getElementById(Prop.options.submitClearSelector))
            flag = false;

        return flag;
    };

    Public.addsubmit = function(sendEvent) {
        if (App.processForm.addsubmit) {
            App.processForm.addsubmit(sendEvent);
        }
    };

    Public.subsubmit = function(sendEvent) {
        if (App.processForm.subsubmit) {
            App.processForm.subsubmit(sendEvent);
        }
    };

    Public.mulsubmit = function(sendEvent) {
        if (App.processForm.mulsubmit) {
            App.processForm.mulsubmit(sendEvent);
        }
    };

    Public.divsubmit = function(sendEvent) {
        if (App.processForm.divsubmit) {
            App.processForm.divsubmit(sendEvent);
        }
    };

    Public.modsubmit = function(sendEvent) {
        if (App.processForm.modsubmit) {
            App.processForm.modsubmit(sendEvent);
        }
    };

    Public.clearsubmit = function(sendEvent) {
        if (App.processForm.clearsubmit) {
            App.processForm.clearsubmit(sendEvent);
        }
    };

    Public.onSubmit = function() {
        Utility.addEventListener(
            document.getElementById(Prop.options.submitAddSelector),
            'click',
            function(getEvent) {    Public.addsubmit(getEvent);     }
        );

        Utility.addEventListener(
            document.getElementById(Prop.options.submitSubSelector),
            'click',
            function(getEvent) {    Public.subsubmit(getEvent);     }
        );

        Utility.addEventListener(
            document.getElementById(Prop.options.submitMulSelector),
            'click',
            function(getEvent) {    Public.mulsubmit(getEvent);     }
        );

        Utility.addEventListener(
            document.getElementById(Prop.options.submitDivSelector),
            'click',
            function(getEvent) {    Public.divsubmit(getEvent);     }
        );

        Utility.addEventListener(
            document.getElementById(Prop.options.submitModSelector),
            'click',
            function(getEvent) {    Public.modsubmit(getEvent);     }
        );

        Utility.addEventListener(
            document.getElementById(Prop.options.submitClearSelector),
            'click',
            function(getEvent) {    Public.clearsubmit(getEvent);       }
        );
    };

    Public.init();
}
