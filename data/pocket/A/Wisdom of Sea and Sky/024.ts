import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cherrim",
		'fr-fr': "Ceriflor"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [421],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Cherubi"
	},

	description: {
		'en-us': "After absorbing plenty of sunlight, Cherrim takes\nthis form. It's full of energy while it's like this,\nand its liveliness will go on until sundown.",
		'fr-fr': "Il prend cette forme lorsqu'il a fait le plein de soleil. Il déborde alors d'énergie et reste très actif jusqu'au crépuscule."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card