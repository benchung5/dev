// ---------- OBSERVER PATTERN ----------
// A single object notifies many objects (observers) when a
// state change occurs
var Observable = function() {
    this.subscribers = [];
}

Observable.prototype = {
    subscribe: function(subscriber) {
        // Add the subscriber object to the list
        this.subscribers.push(subscriber);
    },
    unsubscribe: function(unsubscriber) {

        // Cycle through the subscriber array and delete
        // the unsubscriber
        for (i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === unsubscriber) {
                this.subscribers.splice(i, 1);

                // We assume it only subscribed once so we
                // leave after it is found
                return unsubscriber.name;
            }
        }
    },
    publish: function(data) {

        // Cycle through all subscribers and send them the update
        for (i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].receiveData(data);
        }
    }
};

var OrganFanny = {
  name: "Organ Fanny",
  receiveData: function(data){
    document.write(this.name + " received your info : " + data + "<br />");
  }
}

var BoldmanYaks = {
  name: "Boldman Yaks",
    receiveData: function(data){
      document.write(this.name + " received your info : " + data + "<br />");
    }
}

// Add subscribers and alert them
observable = new Observable();
observable.subscribe(OrganFanny);
observable.subscribe(BoldmanYaks);
observable.publish('IBM at $145.30');

document.write(observable.unsubscribe(OrganFanny) + " Unsubscribed<br />");

observable.publish('IBM at $145.33');