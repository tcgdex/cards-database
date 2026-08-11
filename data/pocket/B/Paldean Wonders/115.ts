import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

    name: {
		'fr-fr': "Pepper",
		'en-us': "Arven",
		'es-es': "Damián",
		'it-it': "Pepe",
		'pt-br': "Arven",
		'de-de': "Pepper"
    },

    illustrator: "GIDORA",
    rarity: "Three Star",
    category: "Trainer",

    effect: {
        en: "Flip a coin. If heads, put a random Item card from your deck into your hand. If tails, put a random Pokémon Tool card from your deck into your hand.",
    },
    
    trainerType: "Supporter",
}

export default card