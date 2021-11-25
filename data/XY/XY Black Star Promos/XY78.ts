import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Latias",
		fr: "Latias",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 90,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Eon Connection",
				fr: "Connexion Éon",
			},
			effect: {
				en: "Draw a card. If Latios is on your Bench, draw 1 more card.",
				fr: "Piochez une carte. Si Latios est sur votre Banc, piochez 1 carte supplémentaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Wing",
				fr: "Ailes Vives"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
