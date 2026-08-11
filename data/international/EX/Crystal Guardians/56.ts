import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Meditite",
		'fr-fr': "Meditikka",
		'de-de': "Meditie"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		307,
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
				'en-us': "Kick",
				'fr-fr': "Koud'pied",
				'de-de': "Tritt"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pure Power",
				'fr-fr': "Pouvoir pur",
				'de-de': "Mentalkraft"
			},
			effect: {
				'en-us': "Put 2 damage counters on your opponent's Pokémon in any way you like.",
				'fr-fr': "Placez 2 marqueurs de dégât sur les Pokémon de votre adversaire de la façon que vous voulez.",
				'de-de': "Lege 2 Schadensmarken in beliebiger Verteilung auf die gegnerischen Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277137,
		tcgplayer: 87282
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
