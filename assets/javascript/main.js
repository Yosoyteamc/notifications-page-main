/* Creating a variable called notificationActive and assigning it an array of strings. It is also
creating a variable called count and assigning it the length of the array notificationActive. 
In the app these variables would be populated with information from a json file
*/

let notificationActive = ["1","2","3"];
let count = notificationActive.length;

/**
 * It removes the class 'notification-content--active' from all elements with the class
 * 'notification-content' and removes the class 'notitifation__details--active' from all elements with
 * the class 'notitifation__details'.
 * */
function desmarkAll(){
    count = 0;
    document.querySelector("#count").textContent = count;

    const notifications = document.querySelectorAll(".notification-content");
    const content = document.querySelectorAll('.notitifation__details');

    notifications.forEach(element => {
        element.classList.remove('notification-content--active');
    });

    content.forEach(element => {
        element.classList.remove('notitifation__details--active');
    });
}


/**
 * It removes the class 'notification-content--active' and 'notitifation__details--active' from 
 * the element whit id in the array notificationActive. the function removes the id of the notification 
 * from the array of notificationActive so that it doesn't repeat the process again, it also shows the 
 * user the number of active notifications onscreen.
 * @param id - the id of the notification active
 */
function desmarkItem(id){
    count = count - 1;
    const notification = document.getElementById(id);
    document.querySelector("#count").textContent = count;

    notificationActive.forEach(element => {if(id===element){
        notification.classList.remove('notification-content--active');
        notification.querySelector(".notitifation__details").classList.remove('notitifation__details--active');
    }});

    notificationActive = notificationActive.filter((item) => item !== id);   
}


/* Adding an event listener to the window object. When the window is clicked, it will execute the
function desmark. The function desmark will add an event listener to all elements with the class
click. When one of those elements is clicked, it will execute the function that is passed to the
event listener. The function will get the id of the element that was clicked and will check if the
id is in the array notificationActive. If it is, it will execute the function desmarkItem. */
window.addEventListener("click", e => {
    const id = e.target.getAttribute("id");
    const name = e.target.getAttribute("data-*");
    const found = notificationActive.find(elem => id===elem || name===elem);
    if(found !== undefined){
        desmarkItem(found);
    }
});
