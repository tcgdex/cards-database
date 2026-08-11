import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Charizard ex",
		'fr-fr': "Dracaufeu ex",
		'de-de': "Glurak ex"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Energy Flame",
				'fr-fr': "Flamme d'Énergie",
				'de-de': "Energy Flame"
			},
			effect: {
				'en-us': "All Energy attached to Charizard ex are Fire Energy instead of its usual type.",
				'fr-fr': "Toutes les Énergies attachées à Dracaufeu ex sont des Énergies .",
				'de-de': "All Energy attached to Charizard ex are  Energy instead of its usual type."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Slash"
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Burn Down",
				'fr-fr': "Réduire en cendres",
				'de-de': "Burn Down"
			},
			effect: {
				'en-us': "Discard 5 Fire Energy attached to Charizard ex. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, and any other effects on the Defending Pokémon.",
				'fr-fr': "Défaussez 5 Énergies  attachées à Dracaufeu ex. Les dégâts de cette attaque ne sont pas affectés la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				'de-de': "Discard 5  Energy attached to Charizard ex. This attack's\ndamage isn't affected by Weakness, Resistance,\nPoké-Powers, Poké-Bodies, and any other effects on the\nDefending Pokémon."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276281,
				tcgplayer: 84199
			},
		},
	]
}

export default card
