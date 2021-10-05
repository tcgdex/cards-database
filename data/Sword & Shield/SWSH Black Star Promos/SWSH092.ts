import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Uta",
	category: "Pokemon",

	description: {
		en: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."
	},

	stage: "Basic",

	name: {
		en: "Charmander"
	},

	rarity: "None",
	dexId: [4],
	hp: 70,
	types: ["Fire"],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Collect"
		},

		effect: {
			en: "Draw a card."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Flare"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card