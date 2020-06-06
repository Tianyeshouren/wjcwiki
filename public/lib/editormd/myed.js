var xxxxxx = "[TOC] ##标题 ###子标题 $$\frac{1}{2}$$";
var kk;
var editor
function abc(cont) {
             editor = editormd("editor-md", {
             width  : "100%",
             height : 640,
             path   : 'lib/editormd/lib/',
          
           toolbarIcons : function() {
            // Or return editormd.toolbarModes[name]; // full, simple, mini
            // Using "||" set icons align right.
            
             
            return [ "undo", "redo", "|", 
            "bold", "del", "italic", "quote", "uppercase", "lowercase", "|", 
            "h1", "h2", "h3", "h4", "h5", "h6", "|", 
            "list-ul", "list-ol", "hr", "|",
            "watch", "preview", "fullscreen", "|",
            "help", "info","|","testIcon2","|","testIcon1","|"]
        },
        
 		 
       
        toolbarIconTexts : {
        	 testIcon1 : "打开文件" ,
            testIcon2 : "保存为本地" 
              // 如果没有图标，则可以这样直接插入内容，可以是字符串或HTML标签
        },
         
           toolbarHandlers : {
            /**
             * @param {Object}      cm         CodeMirror对象
             * @param {Object}      icon       图标按钮jQuery元素对象
             * @param {Object}      cursor     CodeMirror的光标对象，可获取光标所在行和位置
             * @param {String}      selection  编辑器选中的文本
             */
          testIcon1:    function(cm) {
          
                kk=cm;

                  document.getElementById("jssss").click();
               
              
            



    },

            testIcon2 : function(cm, icon, cursor, selection) {
                var content = editor.getMarkdown();
                console.log(content);
                var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
				saveAs(blob, "11.md");

            }
        },

             tex  : true,
             onload: function() {
                this.setValue(cont);
              }

           
        }
        
        );
    }


 
    var openFile = function(event) {

        var input = event.target;
        console.log('input'+input)
       
        var reader = new FileReader();
        reader.onload = function() {
            if(reader.result) {
                //显示文件内容
                xxxxxx= reader.result;
                kk.setValue(xxxxxx);
               

            }
        };
        reader.readAsText(input.files[0]);

    
           




}