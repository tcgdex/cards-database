import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Rapidash"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Ponyta"
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Fire Mane"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Star",

	description: {
		en: "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.",
	}
}

export default card
