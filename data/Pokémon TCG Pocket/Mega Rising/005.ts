import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Beautifly"
	},

	illustrator: "Midori Harada",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Silcoon"
	},

	description: {
		en: "It has an aggressive nature. It stabs prey with its\nlong, narrow mouth to drain the prey's fluids."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Skill Dive"
		},

		cost: ["Grass"],

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card