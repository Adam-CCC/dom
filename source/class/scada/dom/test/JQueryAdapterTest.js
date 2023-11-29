/**
 * @asset(scada/dom/jquery.js)
 * 
 * @ignore(jQuery.*)
 * @ignore($.*)
 * @ignore($)
 */

qx.Class.define("scada.dom.test.JQueryAdapterTest",
    {
        extend: qx.dev.unit.TestCase,

        members: {
            setUp() {
                // Создаем экземпляр адаптера для тестирования
                this.__element = $("div");
                this.__adapter = new scada.dom.JQueryAdapter(this.__element);
            },
    
            tearDown() {
                // Уничтожаем адаптер после каждого теста
                this.__adapter.dispose();
                this.__adapter = null;
            },
    
            testSetId() {
                this.__adapter.setId("testId");
                this.assertEquals("testId", this.__adapter.getId(), "setId/getId работают неверно");
            },
    
            testSetStyle() {
                this.__adapter.setStyle("color", "red");
                this.assertEquals("red", this.__adapter.getStyle("color"), "setStyle/getStyle работают неверно");
            },
    
            testSetAttr() {
                this.__adapter.setAttr("data-test", "value");
                this.assertEquals("value", this.__adapter.getAttr("data-test"), "setAttr/getAttr работают неверно");
            },
    
            testAppend() {
                let child = $("<span>Child</span>");
                this.__adapter.append(child);
                this.assertEquals(1, this.__element.children().length, "append работает неверно");
            },
    
            testRemove() {
                this.__adapter.remove();
                this.assertUndefined(this.__element.parent(), "remove работает неверно");
            },
    
            testAddClass() {
                this.__adapter.addClass("testClass");
                this.assertTrue(this.__element.hasClass("testClass"), "addClass работает неверно");
            },
    
            testSetHtml() {
                this.__adapter.setHtml("<p>Hello</p>");
                this.assertEquals("<p>Hello</p>", this.__element.html(), "setHtml/getHtml работают неверно");
            }
        }
    });