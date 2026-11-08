import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Electivire",
		'fr-fr': "Elekable",
		'de-de': "Elevoltek"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [466],

	hp: 100,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Electabuzz",
		'fr-fr': "Elektek"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Plasma",
				'fr-fr': "Plasma",
				'de-de': "Plasma"
			},
			effect: {
				'en-us': "Search your discard pile for a Lightning Energy card and attach it to Electivire.",
				'fr-fr': "Cherchez une carte Énergie Lightning dans votre pile de défausse et attachez-la à Elekable.",
				'de-de': "Durchsuche deinen Ablagestapel nach einer -Energiekarte und lege sie an Elevoltek an."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thunder Shot",
				'fr-fr': "Tir foudroyant",
				'de-de': "Donnerschuss"
			},
			effect: {
				'en-us': "This attack does 50 damage to each of your opponent's Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire auxquels sont attachées des cartes Énergie. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon deines Gegners, an das Energiekarten angelegt sind, 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "As its electric charge amplifies, blue sparks begin to crackle between its horns."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85123,
				cardmarket: 279550
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279550,
				tcgplayer: 85123
			}
		},
		{
			type: "holo",
			stamp: ['set-logo'],
			thirdParty: {
				tcgplayer: 224195
			}
		},
		{
			type: "holo",
			stamp: ['staff', 'set-logo'],
			thirdParty: {
				tcgplayer: 224196
			}
		},
	],

}

export default card
