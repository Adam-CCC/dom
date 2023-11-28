/**
 * @asset(scada/dom/jquery.js)
 * 
 * @ignore(jQuery.*)
 * @ignore($.*)
 * @ignore($)
 */
qx.Class.define("scada.dom.JQueryAdapter", {
    extend : qx.core.Object,
    implement: scada.dom.IElement,

    construct: function(element){
        this.__element = $(element);
    },

    statics: {
        JQuery: function(){
            return $;
        }
    },

    members: {
        __element: null

        ,__createElement: function(selector){
            return new scada.dom.JQueryAdapter(selector);
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
            this.__element.css(name, value);
        }

        ,getStyle(name){
            return this.__element.css(name);
        }

        ,getStyles(){
            return this.__element.attr("style");
        }

        ,setHeight: function(value){
            this.__element.attr("height", value);
        }

        ,setWidth: function(value){
            this.__element.attr("width", value);
        }

        ,getHeight: function(){
            return this.__element.attr("height");
        }

        ,getAttr: function(name){
            return this.__element.attr(name);
        }

        ,setAttr: function(name, value){
            this.__element.attr(name, value);
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
            return this.__element.attr("width");
        }

        ,remove: function(){
            this.__element.remove();
        }

        ,addClass: function(name){
            this.__element.addClass(name);
        }

        ,setHtml: function(value){
            this.__element.html(value);
        }

        ,setStyleBySelector: function(selector, key, value){
            this.__element.find(selector).css(key, value);
        }

        ,setAttrToSelector: function(selector, key, value){
            this.__element.find(selector).attr(key, value);
        }

        ,getElementsBySelector: function(selector){
            return this.__element.find(selector);
        }

        ,getElementBySelector: function(selector){
            return this.__createElement(this.__element.find(selector));
        }

        ,setHtmlBySelector: function(selector, value){
            $(this.__element.find(selector)[0]).html(value);
        }

        ,empty: function(){
            this.__element.empty();
        }

        ,setStyleBySelector: function(selector, name, value){
            this.__element.find(selector).css(name, value);
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
            return this.__createElement(this.__element.closest(selector));
        }

        ,getClosestFromPoint: function(x, y){
            var el = this.__createElement(document.elementFromPoint(x, y));
            return el.getClosest(".device");
        }
    }
});