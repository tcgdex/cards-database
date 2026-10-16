import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Cherrim"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Cherubi"
	},

	description: {
		en: "After absorbing plenty of sunlight, Cherrim takes\nthis form. It's full of energy while it's like this,\nand its liveliness will go on until sundown."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Seed Bomb"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card