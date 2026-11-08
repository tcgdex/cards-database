import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Infernape",
		'fr-fr': "Simiabraz",
		'de-de': "Panferno"
	},

	illustrator: "Nakaoka",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		392,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Monferno",
		'fr-fr': "Chimpenfeu",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Meteor Punch",
				'fr-fr': "Poing-météore",
				'de-de': "Meteorhieb"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu"
			},
			damage: "30x",

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Flare Blitz",
				'fr-fr': "Boutefeu",
				'de-de': "Flammenblitz"
			},
			effect: {
				'en-us': "Discard all Fire Energy attached to Infernape.",
				'fr-fr': "Défaussez toutes les Énergies Fire attachées à Simiabraz.",
				'de-de': "Entferne alle an Panferno angelegten  Energien und lege sie auf deinen Ablagestapel"
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	description: {
		'en-us': "It uses a special kind of martial arts involving all its limbs. Its fire never goes out.",
	},

	thirdParty: {
		cardmarket: 277504,
		tcgplayer: 86274
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse"
		}
	]
}

export default card
