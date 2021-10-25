import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Charmander"
	},

	illustrator: "Uta",
	rarity: "None",
	category: "Pokemon",
	dexId: [4],
	hp: 70,
	types: ["Fire"],

	description: {
		en: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."
	},

	stage: "Basic",

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

	retreat: 1
}

export default card