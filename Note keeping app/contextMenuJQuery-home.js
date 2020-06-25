var archiveArray = JSON.parse(localStorage["archiveArray"]);
var archiveClasses = JSON.parse(localStorage["archiveClasses"]);
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
									$("#mainDIV").empty();
								if(key === "archive"){
                    $(this).removeClass("context-menu-active");
										archiveArray.push(String($(this).html()));
										archiveClasses.push(String($(this).attr("class")));
										localStorage["archiveArray"] = JSON.stringify(archiveArray);
										localStorage["archiveClasses"] = JSON.stringify(archiveClasses);
                    $(this).remove();
								}
                // if(key === "edit"){
                //   $(this).find("h2").css("-webkit-user-modify", "read-write-plaintext-only");
                //   $(this).find("p").css("-webkit-user-modify", "read-write-plaintext-only");
                // }
            },
            items: {
                "completed": {name: "Check", icon: "add"},
								"archive":	{name: "Archive", icon: "loading"},
                "delete": {name: "Delete", icon: "delete"},
                "sep1": "---------",
                "delete_all": {name: "Delete all notes", icon: function(){
                    return 'context-menu-icon context-menu-icon-quit';
                }}
            }
        });

        $('.context-menu-one').on('click', function(e){
            console.log('clicked', this);
        })
  });
