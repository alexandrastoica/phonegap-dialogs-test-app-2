var notification_count=0;

$(document).on('pageinit', function() {
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});

});
   	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Are you hungry?',  // message
        dialogDismissed,         // callback
        'An example dialog!',            // title
        ['Yes', 'No']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) {
        
        new Toast({content: "Take a break and eat some food", duration: 3000});
        createNotification();

    } else if(buttonIndex==2) new Toast({content: "Carry on working", duration: 3000});

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 30000); //delayed time
    			
    //
    //setup notification
    //
	window.plugin.notification.local.add({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"Get back to work",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}