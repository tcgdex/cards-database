import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Gliscor",
		fr: "Scorvol"
	},

	illustrator: "Shiburingaru",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Gligar"
	},

	description: {
		en: "It observes prey while hanging inverted from\nbranches. When the chance presents itself,\nit swoops!",
		fr: "Il guette sa proie, pendu à une branche la tête en bas, et s'en saisit à la première occasion."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé"
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