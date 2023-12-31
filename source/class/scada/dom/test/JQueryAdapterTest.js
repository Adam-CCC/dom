qx.Class.define("scada.dom.test.JQueryAdapterTest",
    {
        extend: qx.dev.unit.TestCase,

        members: {
            setUp() {
                this.adapter = new scada.dom.JQueryAdapter("<p>");
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

                this.assertEquals("red", adapter.getStyle("color"));
            },

            testHeightWidth() {
                const adapter = this.adapter;

                adapter.setHeight(100);
                adapter.setWidth(200);

                this.assertEquals("100", adapter.getHeight());
                this.assertEquals("200", adapter.getWidth());
                console.log(adapter.getImpl()[0]);
            },

            testHtmlandAppend() {
                const adapter = this.adapter;

                adapter.setHtml("Содержимое элемента");
                this.assertEquals("Содержимое элемента", adapter.getImpl()[0].innerHTML);

                adapter.append("<p>Test</p>");
                this.assertEquals("Содержимое элемента<p>Test</p>", adapter.getImpl()[0].innerHTML);
            },

            testGetClosestFromPoint() {
                const adapter = this.adapter;
    
                this.assertObject(adapter.getClosestFromPoint(50,70));
            },

            testInsertBefore() {
                const adapter = this.adapter;
                const fakeElement = new scada.dom.JQueryAdapter("<p>Raptor</p>");
                const getClassName = document.body.getElementsByClassName("tests");
                adapter.addClass("tests");
                fakeElement.addClass("tests");

                document.body.append(adapter.getImpl()[0])
                fakeElement.insertBefore(adapter);

                this.assertEquals('<p class="tests">Raptor</p>', getClassName[0].outerHTML);
                this.assertEquals('<p class="tests"></p>', getClassName[1].outerHTML);

                getClassName[0].remove();
                getClassName[0].remove();
            },

            testEmpty() {
                const adapter = this.adapter;

                adapter.empty();

                this.assertEquals("", adapter.getImpl()[0].innerHTML);
            },

            testGetElementsBySelector() {
                const adapter = this.adapter;

                adapter.setHtml("<p><p></p></p>")

                this.assertEquals(3, adapter.getElementsBySelector("p").length)
            },

            testGetElementBySelector() {
                const adapter = this.adapter;
                
                adapter.setHtml("<p></p>");
                const result = adapter.getElementBySelector("p");

                this.assertTrue(result instanceof scada.dom.JQueryAdapter);
                this.assertEquals('p', result.getImpl()[0].localName);
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
                console.log(adapter.getClosest("div"));
                // this.assertElement(adapter.getClosest("div").getImpl()[0]);
            },

            testRemove() {
                const adapter = this.adapter;
                
                console.log(adapter.getImpl());
                adapter.remove();
                console.log(adapter.getImpl());
            }
        }
    });
