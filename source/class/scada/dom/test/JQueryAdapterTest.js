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

            testId() {
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

                adapter.setHtml("Содержимое элемента");

                this.assertEquals("Содержимое элемента", adapter.getImpl()[0].innerHTML);
            },

            testAppendAndEmpty() {
                const adapter = this.adapter;

                adapter.append(". Конец элемента");

                this.assertEquals("Содержимое элемента. Конец элемента", adapter.getImpl()[0].innerHTML);
            },

            testClass() {
                const adapter = this.adapter;

                adapter.addClass("device");

                this.assertTrue(adapter.hasClass("device"));
            },

            testGetClosestFromPoint() {
                const adapter = this.adapter;
    
                this.assertObject(adapter.getClosestFromPoint(50,70));
            },

            testInsertBefore() {
                const adapter = this.adapter;

                adapter.insertBefore(adapter);

                this.assertIdentical(2, adapter.getImpl()[0].parentNode.getElementsByTagName("p").length);
            },

            testEmptyHTML() {
                const adapter = this.adapter;

                adapter.empty();

                this.assertEquals("", adapter.getImpl()[0].innerHTML);
            },

            testGetElementsBySelector() {
                const adapter = this.adapter;

                this.assertElement(adapter.getElementsBySelector("p").prevObject[0]);
            },

            testGetElementBySelector() {
                const adapter = this.adapter;

                this.assertObject(adapter.getElementBySelector("p"));
            },

            testAddlistener() {
                const adapter = this.adapter;
                let value = "";

                adapter.addListenerToImpl("click", function () {
                    value = "Click";
                });
                adapter.getImpl().trigger("click");

                this.assertEquals("Click", value);
            },

            testGetImpl() {
                this.assertObject(this.adapter.getImpl());
            },

            testGetClosest() {
                const adapter = this.adapter;

                this.assertElement(adapter.getClosest("div").getImpl()[0]);
            },

            testRemove() {
                const adapter = this.adapter;
                const parent = document.querySelector('[qxclass="qx.ui.basic.Label"]');
                // this.assertElement(adapter.getClosest("div").getImpl()[0]);
                this.assertEquals(2, parent.getElementsByTagName("p").length);
                adapter.remove();
                this.assertEquals(0, parent.getElementsByTagName("p").length);
            }
        }
    });
