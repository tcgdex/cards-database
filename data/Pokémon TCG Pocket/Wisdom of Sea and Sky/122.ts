import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Steelix"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		en: "Onix"
	},

	description: {
		en: "It is said that if an Onix lives for over 100 years,\nits composition changes to become diamond-like."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heavy Impact"
		},

		damage: 110,
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["ho-oh"]
}

export default card