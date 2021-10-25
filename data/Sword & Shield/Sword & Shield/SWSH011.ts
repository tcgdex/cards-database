import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Wooloo"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",
	dexId: [831],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Its curly fleece is such an effective cushion that this Pokémon could fall off a cliff and stand right back up at the bottom, unharmed."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Defense Curl"
		},

		effect: {
			en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Headbutt"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card