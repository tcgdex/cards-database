import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hiker",
		'fr-fr': "Montagnard"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		'en-us': "For each of your {F} Pokémon in play, look at that many cards from the top of your deck and put them back in any order.",
		'fr-fr': "Pour chacun de vos Pokémon {F} en jeu, regardez une carte du dessus de votre deck, puis replacez les cartes regardées dans l'ordre de votre choix."
	},

	trainerType: "Supporter",
	boosters: ["ho-oh"]
}

export default card