import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [264],
	set: Set,

	name: {
		en: "Linoone"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Zigzagoon",
	},

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Seek Out"
		},
		effect: {
			en: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward."
		}
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Continuous Headbutt"
		},
		effect: {
			en: "Flip a coin until you get tails. This attack does 40 damage times the number of heads."
		},
		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "2x"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 86805
	}
}

export default card
