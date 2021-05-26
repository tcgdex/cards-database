import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Barbaracle",
		fr: "Golgopathe",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		689,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Binacle",
		fr: "Opermine",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rock Rush",
				fr: "Déferlante Rocheuse",
			},
			effect: {
				en: "Discard as many Fighting Energy cards as you like from your hand. This attack does 30 damage times the number of Energy cards you discarded.",
				fr: "Défaussez autant de cartes Énergie Fighting que vous voulez de votre main. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Boulder Crush",
				fr: "Rocher Écrasant",
			},

			damage: 80,

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
