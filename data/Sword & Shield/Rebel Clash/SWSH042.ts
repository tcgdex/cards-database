import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Eevee"
	},

	illustrator: "You Iribi",
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
			en: "Signs of Evolution"
		},

		effect: {
			en: "Search your deck for a card that evolves from Eevee, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wild Kick"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
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