import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [651],

	name: {
		'en-us': "Quilladin"
	},

	illustrator: "5ban Graphics",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Chespin"
	},

	description: {
		'en-us': "It can send a trailer flying with a tackle. It's numb\nto pain, so even violent collisions don't faze it."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Needle Arm"
		},

		damage: 60,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card