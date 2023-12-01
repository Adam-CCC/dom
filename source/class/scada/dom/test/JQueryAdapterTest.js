qx.Class.define("scada.dom.test.JQueryAdapterTest",
    {
        extend: qx.dev.unit.TestCase,

        members: {
            setUp() {
                // Создаем экземпляр адаптера для тестирования
                this.adapter = new scada.dom.JQueryAdapter();
            },
    
            tearDown() {
                // Уничтожаем адаптер после каждого теста
                this.adapter.dispose();
                this.adapter = null;
            },
    
            testSetId() {
                this.adapter.setId("testId");
                this.assertEquals("testId", this.adapter.getId(), "setId/getId работают неверно");
            },
    
            testSetStyle() {
                this.adapter.setStyle("color", "red");
                this.assertEquals("red", this.adapter.getStyle("color"), "setStyle/getStyle работают неверно");
            },
    
            testSetAttr() {
                this.adapter.setAttr("data-test", "value");
                this.assertEquals("value", this.adapter.getAttr("data-test"), "setAttr/getAttr работают неверно");
            },
    
            testRemove() {
                this.adapter.remove();
                this.assertUndefined(this.__element.parent(), "remove работает неверно");
            },
    
            testAddClass() {
                this.adapter.addClass("testClass");
                this.assertTrue(this.__element.hasClass("testClass"), "addClass работает неверно");
            },
    
            testSetHtml() {
                this.adapter.setHtml("<p>Hello</p>");
                this.assertEquals("<p>Hello</p>", this.__element.html(), "setHtml/getHtml работают неверно");
            }
        }
    });