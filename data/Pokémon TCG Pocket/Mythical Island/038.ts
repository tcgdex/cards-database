import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Florges"
	},

	illustrator: "Cona Nitanda",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Floette"
	},

	description: {
		en: "This Pokémon creates an impressive flower garden in its territory. It draws forth the power of the red flowers around its neck."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Bloomshine"
		},

		damage: 80,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Heal 20 damage from each of your Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
