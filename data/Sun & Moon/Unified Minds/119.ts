import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Excadrill",
		fr: "Minotaupe",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		530,
	],
	hp: 120,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Drilbur",
		fr: "Rototaupe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Rototiller",
				fr: "Fertilisation",
			},
			effect: {
				en: "Shuffle 4 cards from your discard pile into your deck.",
				fr: "Mélangez 4 cartes de votre pile de défausse avec votre deck.",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
