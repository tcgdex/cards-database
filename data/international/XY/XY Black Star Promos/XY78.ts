import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Latias",
		'fr-fr': "Latias",
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Promo",
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
				'en-us': "Eon Connection",
				'fr-fr': "Connexion Éon",
			},
			effect: {
				'en-us': "Draw a card. If Latios is on your Bench, draw 1 more card.",
				'fr-fr': "Piochez une carte. Si Latios est sur votre Banc, piochez 1 carte supplémentaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Speed Wing",
				'fr-fr': "Ailes Vives"
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

	description: {
		'en-us': "It can telepathically communicate with people. It changes its appearance using its down that refracts light.",
	},

	thirdParty: {
		cardmarket: 289801
	}
}

export default card
