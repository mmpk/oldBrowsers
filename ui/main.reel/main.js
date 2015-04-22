/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

var c = 0;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    handleButtonAction: {
        value: function() {
            var rep = this.templateObjects.repetition; 
            rep.content.add(c);
            c++;
            
        }
    }
});
