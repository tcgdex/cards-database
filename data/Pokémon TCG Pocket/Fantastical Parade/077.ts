import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Sandshrew"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "No matter how high a place it falls from, this\nPokémon can save itself by rolling into a ball\nand bouncing."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Double Scratch"
		},

		damage: 20,
		cost: ["Fighting"],

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card