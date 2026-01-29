import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Excadrill"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		en: "Drilbur"
	},

	description: {
		en: "Its drill, which has evolved into steel, is strong\nenough to bore through iron plates. This\nPokémon is a great help in tunnel construction."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slashing Claw"
		},

		damage: 80,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card