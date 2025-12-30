import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Spritzee"
	},

	illustrator: "Tika Matsuno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "The scent its body gives off enraptures those\nwho smell it. Noble ladies had no shortage of\nlove for Spritzee."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sweet Scent"
		},

		cost: ["Psychic"],

		effect: {
			en: "Heal 20 damage from 1 of your Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card