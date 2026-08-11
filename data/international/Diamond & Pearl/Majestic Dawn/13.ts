import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Rotom",
		'fr-fr': "Motisma",
		'de-de': "Rotom"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		479,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Dual Trans",
				'fr-fr': "Double trans",
				'de-de': "Doppel-Transfer"
			},
			effect: {
				'en-us': "Search your discard pile for up to 2 basic Energy cards and attach them to 1 of your Pokémon.",
				'fr-fr': "Choisissez dans votre pile de défausse jusqu'à 2 cartes Énergie et attachez-les à 1 de vos Pokémon.",
				'de-de': "Durchsuche deinen Ablagestapel nach bis zu 2 Basis-Energiekarten und lege sie an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Reflect Energy",
				'fr-fr': "Renvoi d'énergie",
				'de-de': "Energiereflektion"
			},
			effect: {
				'en-us': "Move an Energy card attached to Rotom to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une carte Énergie attachée à Motisma sur 1 des Pokémon de votre Banc.",
				'de-de': "Entferne 1 an Rotom angelegte Energiekarte und lege sie an 1 Pokémon auf deiner Bank an."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its body is composed of plasma. It is known to infiltrate electronic devices and wreak havoc.",
	},

	thirdParty: {
		cardmarket: 278062,
		tcgplayer: 88836
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
