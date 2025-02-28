import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Palkia"
	},

	illustrator: "toriyufu",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		en: "It soars across the sky in a form that greatly resembles the<br />creator of all things. Perhaps this imitation of appearance is<br />Palkia's strategy for gaining Arceus's powers."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Zone Smash"
		},

		damage: 60,
		cost: ["Water", "Water", "Water"],

		effect: {
			en: "Flip a coin. If heads, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card