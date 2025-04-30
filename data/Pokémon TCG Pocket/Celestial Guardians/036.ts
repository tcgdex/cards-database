import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Salazzle"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		en: "Salandit"
	},

	description: {
		en: "Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heated Poison"
		},

		damage: 30,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned and Burned."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card