import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Manaphy",
		'fr-fr': "Manaphy",
		'de-de': "Manaphy"
	},

	illustrator: "Nakaoka",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		490,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck un Pokémon de Base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon-Karte und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Aqua Ring",
				'fr-fr': "Anneau Hydro",
				'de-de': "Wasserring"
			},
			effect: {
				'en-us': "Switch Manaphy with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Manaphy avec 1 des Pokémon de votre Banc.",
				'de-de': "Tausche Manaphy gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Born on a cold seafloor, it will swim great distances to return to its birthplace.",
	},

	thirdParty: {
		cardmarket: 277508,
		tcgplayer: 87143
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
