import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Remoraid",
		fr: "Rémoraid"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [223],
	hp: 60,
	types: ["Water"],

	description: {
		en: "The water they shoot from their mouths can hit\nmoving prey from more than 300 feet away.",
		fr: "Son puissant jet d'eau ne manque jamais sa cible, même à 100 m de distance."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Gun",
			fr: "Pistolet à O"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card