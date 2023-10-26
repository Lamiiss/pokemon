// Classe
class Pokemon {
    constructor(name, attack, defense, hp, luck) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.hp = hp;
      this.luck = luck;
    }
  
    // Fonction 1
    isLucky() {                             // Fonction 1 de la classe Pokémon
      return Math.random() < this.luck;     // toujours vérifier si luck > ou < à Math.random avant chaque attaque/ true si this.luck > à Math.random
    }
  
    // Fonction 2
    attackPokemon(pokemonAdverse) {                            //nouvelle const "pokemonAdverse"
      if (this.isLucky()) {                                   // si condition d'attaque est vraie
        const dégâts = this.attack - pokemonAdverse.defense;  // nouvelle const "dégâts" = Att de l'attaquant - def du pokemon adverse
        if (dégâts > 0) {
          pokemonAdverse.hp -= dégâts ;                       // dégâts du pokemon adverse baissent 
          // (ajout de détails) Les PV ne doivent pas descendre au delà de 0
        if (pokemonAdverse.hp < 0) {
          pokemonAdverse.hp = 0;
        }

      }

        console.log(this.name + " attaque " + pokemonAdverse.name + ", il inflige " + dégâts + " dégâts.");
        console.log(pokemonAdverse.name + " a " + pokemonAdverse.hp + " PV restants.");
  
        if (pokemonAdverse.hp <= 0) {
          console.log("Le " + pokemonAdverse.name + " ennemi est K.O.  ");
        }
      }

      else {          //luck < Math.random
        console.log(pokemonAdverse.name + " a évité l'attaque.");
      }

    }
}
  
  // Objet 
  const lucario = new Pokemon("Lucario", 25, 16, 60, 0.8);    
  const zoroark = new Pokemon("Zoroark", 35, 13, 50, 0.7);
  
  //Boucle

  while (lucario.hp > 0 && zoroark.hp > 0) {  //tant que les PV des objets sont supérieur a 0, boucle reste vraie
    lucario.attackPokemon(zoroark);
    if (zoroark.hp <= 0) {
      console.log(lucario.name + " remporte le combat");
      break;
    }
  
    zoroark.attackPokemon(lucario);
    if (lucario.hp <= 0) {
      console.log( zoroark.name + " remporte le combat");
      break;
    }
  }