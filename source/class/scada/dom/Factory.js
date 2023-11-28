qx.Class.define("scada.dom.Factory", {
    extend : qx.core.Object,

    statics: {
        getElement: function(content){
            return new scada.dom.QxAdapter(content);
        }
    }
});