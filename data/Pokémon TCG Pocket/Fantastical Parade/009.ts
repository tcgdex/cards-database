import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Quilladin"
	},

	illustrator: "5ban Graphics",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Chespin"
	},

	description: {
		en: "It can send a trailer flying with a tackle. It's numb\nto pain, so even violent collisions don't faze it."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Needle Arm"
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