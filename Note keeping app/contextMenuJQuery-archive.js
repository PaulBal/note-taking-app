var unarchiveArray = [];
var unarchiveClasses = [];
$(function() {
        $.contextMenu({
            selector: '.card',
            callback: function(key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m);
								if(key === "completed")
									$(this).toggleClass("completed");
								if(key === "delete")
									$(this).remove();
								if(key === "delete_all")
									$("#archiveDIV").empty();
								if(key === "unarchive"){
                    $(this).removeClass("context-menu-active");
                    var arr = [];
                 	  var c = [];
                 	  arr = JSON.parse(localStorage["innerHTML"]);
                 	  c = JSON.parse(localStorage["className"]);
										arr.push(String($(this).html()));
										c.push(String($(this).attr("class")));
										localStorage["innerHTML"] = JSON.stringify(arr);
										localStorage["className"] = JSON.stringify(c);
                    $(this).remove();
								}
            },
            items: {
                "completed": {name: "Check", icon: "add"},
								"unarchive":	{name: "Unarchive", icon: "loading"},
                "delete": {name: "Delete", icon: "delete"},
                "sep1": "---------",
                "delete_all": {name: "Empty archive", icon: function(){
                    return 'context-menu-icon context-menu-icon-quit';
                }}
            }
        });

        $('.context-menu-one').on('click', function(e){
            console.log('clicked', this);
        })
  });
