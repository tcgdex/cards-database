import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Ponyta",
		fr: "Ponyta",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		77,
	],
	hp: 60,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Returning Flames",
				fr: "Retour de Flammes",
			},
			effect: {
				en: "Put 2 Fire Energy cards from your discard pile into your hand.",
				fr: "Prenez 2 cartes Énergie Fire dans votre pile de défausse et ajoutez-les à votre main.",
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Live Coal",
				fr: "Charbon Mutant",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
