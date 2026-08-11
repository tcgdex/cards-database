import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre"
	},

	illustrator: "kamonabe",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [198],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "Feared and loathed by many, it is believed to\nbring misfortune to all those who see it at night.",
		'fr-fr': "Ce Pokémon redouté et peu aimé porterait malheur à quiconque l'aperçoit la nuit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Astonish",
			'fr-fr': "Étonnement"
		},

		cost: ["Darkness"],

		effect: {
			'en-us': "Flip a coin. If heads, your opponent reveals a random card from their hand and shuffles it into their deck.",
			'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire montre une carte de sa main au hasard, puis la mélange avec son deck."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card