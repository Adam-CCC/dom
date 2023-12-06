qx.Class.define("scada.dom.test.JQueryAdapterTest",
    {
        extend: qx.dev.unit.TestCase,

        members: {
            setUp() {
                this.adapter = new scada.dom.JQueryAdapter("p");
            },

            testAttr() {
                const adapter = this.adapter;

                adapter.setAttr("data-test", "123");
                this.assertEquals("123", adapter.getAttr("data-test"));
            },

            testId(){
                const adapter = this.adapter;

                adapter.setId("main");
                this.assertEquals("main", adapter.getId());
            },

            testStyle() {
                const adapter = this.adapter;

                adapter.setStyle("color", "red");
                this.assertEquals("rgb(255, 0, 0)", adapter.getStyle("color"));
            },

            testHeightWidth() {
                const adapter = this.adapter;

                adapter.setHeight(100);
                adapter.setWidth(200);

                this.assertEquals("100", adapter.getHeight());
                this.assertEquals("200", adapter.getWidth());
            },

            testHtml() {
                const adapter = this.adapter;

                adapter.setHtml("Содержимое эелемента");
                this.assertEquals("Содержимое эелемента", adapter.getImpl().html());
            },

            testAppendAndEmpty() {
                const adapter = this.adapter;

                adapter.append(". Конец элемента");
                this.assertEquals("Содержимое эелемента. Конец элемента", adapter.getImpl().html());
            },

            testEmptyHTML(){
                const adapter = this.adapter;

                adapter.empty();
                this.assertEquals("", adapter.getImpl().html());
            },

            testInsertBefore(){
                const adapter = this.adapter;

                adapter.insertBefore(adapter);
                
            }

            // testInsertBeforeAndRemove() {
            //     const adapter = this.adapter;
            //     const otherElement = $("<div>").appendTo("body");

            //     adapter.insertBefore(new scada.dom.JQueryAdapter(otherElement));
            //     this.assertTrue(adapter.getImpl().prev().is(otherElement));

            //     adapter.remove();
            //     this.assertTrue(otherElement.next().length === 0);
            // }
        }
    });