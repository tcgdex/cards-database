import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Cherrim",
		fr: "Ceriflor"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [421],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Cherubi"
	},

	description: {
		en: "After absorbing plenty of sunlight, Cherrim takes\nthis form. It's full of energy while it's like this,\nand its liveliness will go on until sundown.",
		fr: "Il prend cette forme lorsqu'il a fait le plein de soleil. Il déborde alors d'énergie et reste très actif jusqu'au crépuscule."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine"
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