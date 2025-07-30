import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Reuniclus",
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		579,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Duosion",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Future Sight",
			},
			effect: {
				en: "Look at the top 5 cards of your deck and put them back on top of your deck in any order.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Net Force",
			},
			effect: {
				en: "Does 40 damage times the number of Reuniclus you have in play.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281227,
		tcgplayer: 88724
	}
}

export default card
