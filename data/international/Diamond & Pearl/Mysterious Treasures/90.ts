import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'de-de': "Kramurx"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		198,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Swarm",
				'fr-fr': "Nuée",
				'de-de': "Ausschwärmen"
			},
			effect: {
				'en-us': "Search your deck for Murkrow and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez Cornèbre dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Kramurx-Karte und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hide Crowd",
				'fr-fr': "Cache foule",
				'de-de': "Schutz in der Menge"
			},
			effect: {
				'en-us': "Switch Murkrow with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Cornèbre avec 1 de vos Pokémon de Banc.",
				'de-de': "Tausche Kramurx gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It is believed that seeing this Pokémon at night will bring about ominous occurrences.",
		'fr-fr': "On dit que rencontrer un Cornèbre la nuit est signe de mauvais augure."
	},

	thirdParty: {
		cardmarket: 277719,
		tcgplayer: 87652
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
