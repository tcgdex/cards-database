import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Togetic",
		fr: "Togetic",
	},
	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		176,
	],
	hp: 80,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Go Fetch",
				fr: "Récup'",
			},
			effect: {
				en: "Shuffle 3 basic Energy cards from your discard pile into your deck.",
				fr: "Mélangez 3 cartes Énergie de base de votre pile de défausse avec votre deck.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
