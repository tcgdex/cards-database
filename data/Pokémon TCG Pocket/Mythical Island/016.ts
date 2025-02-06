import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Salazzle"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 80,
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
			en: "Poison Claws"
		},

		damage: 30,
		cost: ["Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
