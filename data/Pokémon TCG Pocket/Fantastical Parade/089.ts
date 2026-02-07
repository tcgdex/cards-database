import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Tyrunt"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Jaw Fossil"
	},

	description: {
		en: "This Pokémon is selfish and likes to be pampered.\nIt can also inflict grievous wounds on its Trainer\njust by playing around."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Hammer In"
		},

		damage: 60,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card