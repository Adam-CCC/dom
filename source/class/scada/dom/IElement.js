qx.Interface.define("scada.dom.IElement", {
    members: {
        setId: function(id){}
        ,getId: function(){}
        ,getElementById: function(id){}
        ,setStyle(name, value){}
        ,getStyle(){}
        ,getStyles(){}
        ,setHeight: function(value){}
        ,setWidth: function(value){}
        ,getHeight: function(){}
        ,getAttr: function(name){}
        ,setAttr: function(name, value){}
        ,append: function(content){}
        ,insertBefore: function(element){}
        ,hasClass: function(name){}
        ,getWidth: function(){}
        ,remove: function(){}
        ,addClass: function(name){}
        ,setHtml: function(value){}
        ,setAttrToSelector: function(selector, key, value){}
        ,getElementsBySelector: function(selector){}
        ,getElementBySelector: function(selector){}
        ,setHtmlBySelector: function(selector, value){}
        ,empty: function(){}
        ,setStyleBySelector: function(selector, name, value){}
        ,setStyleByClass: function(selector, name, value){}
        ,getImpl: function(){}
        ,addListenerToImpl: function(event, f){}
        ,getClosest: function(selector){}
        ,getClosestFromPoint: function(x, y){}
    }
});