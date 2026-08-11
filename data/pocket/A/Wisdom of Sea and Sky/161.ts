import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Hiker",
		fr: "Montagnard"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "For each of your {F} Pokémon in play, look at that many cards from the top of your deck and put them back in any order.",
		fr: "Pour chacun de vos Pokémon {F} en jeu, regardez une carte du dessus de votre deck, puis replacez les cartes regardées dans l'ordre de votre choix."
	},

	trainerType: "Supporter",
	boosters: ["ho-oh"]
}

export default card