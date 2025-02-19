import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Turtwig"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		en: "It uses its whole body to photosynthesize when exposed to sunlight. Its shell is made from hardened soil."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
