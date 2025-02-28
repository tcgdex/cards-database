import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Donphan"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Phanpy"
	},

	description: {
		en: "Donphan is covered in tough hide, so even being<br />hit by a car won't faze this Pokémon. However, it<br />is extremely susceptible to rain."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rolling Spin"
		},

		damage: 60,
		cost: ["Fighting", "Fighting", "Fighting"],

		effect: {
			en: "During your next turn, this Pokémon's Rolling Spin attack does +60 damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card