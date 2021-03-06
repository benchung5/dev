
// ---------- SINGLETON PATTERN ----------
// Singletons are used when you only ever want 1 object to
// be created
// Let's say you want to create a game character with fixed
// stats
function Hero(name){

  // Check if the object exists
  if(typeof Hero.instance === 'object'){

    // If it does return it
    return Hero.instance;
  }

  // if it doesn't then create the hero
  this.name = name;
  Hero.instance = this;

  return this;
}

var derekHero = new Hero("Derek");
document.write("Our hero is " + derekHero.name + "<br />");

// This won't change the name to Paul
var paulHero = new Hero("Paul");
document.write("Our hero is " + paulHero.name + "<br />");



