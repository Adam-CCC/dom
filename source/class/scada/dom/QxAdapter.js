/**
 * @use(qx.module.Attribute)
 * @use(qx.module.Manipulating)
 * @use(qx.module.Traversing)
 */
qx.Class.define("scada.dom.QxAdapter", {
    extend : qx.core.Object,
    implement: scada.dom.IElement,

    construct: function(element){
        if (element){
            this.__element = q.create(element);
        }
    },

    members: {
        __element: null

        ,__createElement: function(selector){
            return new scada.dom.QxAdapter(selector);
        }

        ,setId: function(id){
            this.setAttr("id", id);
        }

        ,getId: function(){
            return this.getAttr("id");
        }

        ,getElementById: function(id){
            return this.getElementBySelector("#" + id);
        }

        ,setStyle(name, value){
            this.__element.setStyle(name, value);
        }

        ,getStyles(){
            return this.__element.getAttribute("style");
        }

        ,getStyle(name){
            return this.__element.getStyle(name);
        }

        ,setHeight: function(value){
            this.__element.setAttribute("height", value);
            this.__element.setStyle("height", value);
        }

        ,setWidth: function(value){
            this.__element.setAttribute("width", value);
            this.__element.setStyle("width", value);
        }

        ,getHeight: function(){
            return this.__element.getAttribute("height");
        }

        ,getAttr: function(name){
            return this.__element.getAttribute(name);
        }

        ,setAttr: function(name, value){
            this.__element.setAttribute(name, value);
        }

        ,append: function(content){
            this.__element.append(content);
        }

        ,insertBefore: function(element){
            this.__element.insertBefore(element.getImpl());
        }
        
        ,hasClass: function(name){
            return this.__element.hasClass(name);
        }

        ,getWidth: function(){
            return this.__element.getAttribute("width");
        }

        ,remove: function(){
            this.__element.remove();
        }

        ,addClass: function(name){
            this.__element.addClass(name);
        }

        ,setHtml: function(value){
            this.__element.setHtml(value);
        }

        ,setAttrToSelector: function(selector, key, value){
            this.__element.find(selector).setAttribute(key, value);
        }

        ,getElementsBySelector: function(selector){
            return this.__element.find(selector);
        }

        ,getElementBySelector: function(selector){
            return this.__createElement(this.__element.find(selector));
        }

        ,setHtmlBySelector: function(selector, value){
            setTimeout(function(e){
                q(this.__element.find(selector)[0]).setHtml(value);
            }.bind(this), 10);
        }

        ,empty: function(){
            this.__element.empty();
        }

        ,setStyleBySelector: function(selector, name, value){
            this.__element.find(selector).setStyle(name, value);
        }

        ,setStyleByClass: function(selector, name, value){
            this.setStyleBySelector("." + selector, name, value);
        }

        ,getImpl: function(){
            return this.__element;
        }

        ,addListenerToImpl: function(event, f){
            this.__element.on(event, f);
        }

        ,getClosest: function(selector){
            return this.__createElement(this.__element.getClosest(selector));
        }

        ,getClosestFromPoint: function(x, y){
            var el = this.__createElement(document.elementFromPoint(x, y));
            return el.getClosest(".device");
        }
    }
});