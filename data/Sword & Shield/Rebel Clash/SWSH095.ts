import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Eevee"
	},

	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Pokemon",
	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "It has the ability to alter the composition of its body to suit its surrounding environment."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "First Step"
		},

		effect: {
			en: "Draw a card."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tail Whap"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card