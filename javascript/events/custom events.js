//IE9/10 polyfill custom event
//note: detail property of the event can be any object but they are read only, 
//i.e they can be set only when they the event is created
export function CustomEvent ( event, params ) {
	params = params || { bubbles: false, cancelable: false, detail: undefined };
	var evt = document.createEvent( 'CustomEvent' );
	evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
	return evt;
}
CustomEvent.prototype = window.Event.prototype;


//dispatch the event
this.plantListEvent = CustomEvent('plantListUpdated');
window.dispatchEvent(this.plantListEvent);

//listen for the event
window.addEventListener('plantListUpdated', function(e) {
  console.log(e);
});