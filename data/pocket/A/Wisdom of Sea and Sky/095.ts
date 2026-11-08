import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gliscor",
		'fr-fr': "Scorvol"
	},

	illustrator: "Shiburingaru",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [472],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Gligar"
	},

	description: {
		'en-us': "It observes prey while hanging inverted from\nbranches. When the chance presents itself,\nit swoops!",
		'fr-fr': "Il guette sa proie, pendu à une branche la tête en bas, et s'en saisit à la première occasion."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Sharp Fang",
			'fr-fr': "Croc Aiguisé"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card