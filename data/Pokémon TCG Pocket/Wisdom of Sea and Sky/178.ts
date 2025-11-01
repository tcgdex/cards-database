import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Murkrow",
		fr: "Cornèbre"
	},

	illustrator: "kamonabe",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "Feared and loathed by many, it is believed to\nbring misfortune to all those who see it at night.",
		fr: "Ce Pokémon redouté et peu aimé porterait malheur à quiconque l'aperçoit la nuit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Astonish",
			fr: "Étonnement"
		},

		cost: ["Darkness"],

		effect: {
			en: "Flip a coin. If heads, your opponent reveals a random card from their hand and shuffles it into their deck.",
			fr: "Lancez une pièce. Si c'est face, votre adversaire montre une carte de sa main au hasard, puis la mélange avec son deck."
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