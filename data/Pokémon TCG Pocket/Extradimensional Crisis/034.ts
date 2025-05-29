import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Passimian"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		en: "This Pokémon battles by throwing hard berries.\nIt won't obey a Trainer who throws Poké Balls\nwithout skill."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Let's Throw"
		},

		damage: 40,
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "If Passimian is on your Bench, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card