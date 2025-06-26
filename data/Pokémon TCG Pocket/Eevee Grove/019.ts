import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Vanillish"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Vanillite"
	},

	description: {
		en: "By drinking pure water, it grows its icy body.\nThis Pokémon can be hard to find on days with\nwarm, sunny weather."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sweets Relay"
		},

		damage: 30,
		cost: ["Water"],

		effect: {
			en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card