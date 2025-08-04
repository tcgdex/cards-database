import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Golbat"
	},

	illustrator: "kawayoo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zubat"
	},

	description: {
		en: "It loves to drink other creatures' blood. It's said\nthat if it finds others of its kind going hungry,\nit sometimes shares the blood it's gathered."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Venomous Fang"
		},

		damage: 20,
		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card