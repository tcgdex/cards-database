import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Luvdisc",
		'fr-fr': "Lovdisc",
		'de-de': "Liebiskus"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		370,
	],

	hp: 60,

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
				'en-us': "Call For Friend",
				'fr-fr': "À la rescousse !",
				'de-de': "Call for Friend"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Strange Scale",
				'fr-fr': "Étrange écaille",
				'de-de': "Strange Scale"
			},
			effect: {
				'en-us': "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolué, il est maintenant Confus.",
				'de-de': "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 86933,
		cardmarket: 276564
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86933,
				cardmarket: 276564
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86933,
				cardmarket: 276564
			},
		}
	],
}

export default card
