window.onload=function () {
    /*只能用id取值我的天哪*/
    var tabList=document.getElementById("tabs");
    var aLis=tabList.getElementsByTagName("li");
    var tDiv=document.getElementById("carousel");
    var contents=tDiv.getElementsByTagName("ul");

    for(var i = 0; i < aLis.length; i++) {
        aLis[i].index = i;   /*遍历所有选项*/
        aLis[i].onclick = function() {
            for(var j = 0; j < aLis.length; j++) {
                aLis[j].className = '';
            }
            this.className = "tab-active";

            for(var j = 0; j < contents.length; j++) {
                contents[j].className = "tab-content hide";
            }
            contents[this.index].className = "tab-content show";
        };
    }
}
