import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Roserade"
	},

	illustrator: "chibi",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Roselia"
	},

	description: {
		en: "The poison in its right hand is quick acting.\nThe poison in its left hand is slow acting.\nBoth are life threatening."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Poison Ring"
		},

		damage: 50,
		cost: ["Grass", "Grass"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card