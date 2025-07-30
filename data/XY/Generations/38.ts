import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		50,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mine",
				fr: "Mine",
			},
			effect: {
				en: "Look at the top card of your opponent's deck. Then, you may have your opponent shuffle his or her deck.",
				fr: "Regardez la carte du dessus du deck de votre adversaire. Ensuite, vous pouvez demander à votre adversaire de mélanger son deck.",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Mud-Slap",
				fr: "Coud'Boue",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 288476,
		tcgplayer: 113696
	}
}

export default card
