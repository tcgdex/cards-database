import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "None",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Iron Tail"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 30 damage for each heads."
		},

		damage: "30×"
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electro Ball"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card