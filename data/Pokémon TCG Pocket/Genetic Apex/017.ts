import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Venomoth"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Venonat"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Poison Powder"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.",
	}
}

export default card
