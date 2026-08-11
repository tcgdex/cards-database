import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Nidoran♂",
		'fr-fr': "Nidoran♂",
		'de-de': "Nidoran m"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		32,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Poison Skin",
				'fr-fr': "Peau poison",
				'de-de': "Gifthaut"
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez une face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf 2 Münzen. Wenn eine oder beide Münzen \"Kopf\" gezeigt haben, ist das Verteidigende Pokémon jetzt vergiftet."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It scans its surroundings by raising its ears out of the grass. Its toxic horn is for protection.",
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
