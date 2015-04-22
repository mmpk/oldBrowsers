/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

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
            console.log("action!" + rep.content[1]);
            
        }
    }
});
