import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Nemona",
		'fr-fr': "Menzi",
		'es-es': "Mencía",
		'it-it': "Nemi",
		'pt-br': "Noêmia",
		'de-de': "Nemila"
  },
  illustrator: "Sanosuke Sakuma",
  rarity: "Two Diamond",
  category: "Trainer",
  effect: {
    en: "During this turn, attacks used by your Pawmot do +80 damage to your opponent's Active Pokémon ex.",
  },
  trainerType: "Supporter",
};

export default card;