import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Team Star Grunt",
		'fr-fr': "Sbire de la Team Star",
		'es-es': "Recluta del Team Star",
		'it-it': "Recluta del Team Star",
		'pt-br': "Recruta da Equipe Star",
		'de-de': "Rüpel von Team Star"
  },
  illustrator: "nagimiso",
  rarity: "Two Diamond",
  category: "Trainer",
  effect: {
    en: "Discard a random Energy from among the Energy attached to all of your opponent's Pokémon that have an Ability.",
  },
  trainerType: "Supporter",
};

export default card;