import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Floette"
	},

	illustrator: "Cona Nitanda",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	evolveFrom: {
		en: "Flabébé"
	},

	description: {
		en: "This Pokémon draws forth what power is left in withered flowers to make them healthy again. It holds a red flower."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leaf Drain"
		},

		damage: 40,
		cost: ["Psychic"],

		effect: {
			en: "Heal 10 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
