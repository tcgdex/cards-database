import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Persian",
		'fr-fr': "Persian",
		'de-de': "Snobilikat"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Thick Skin",
				'fr-fr': "Dur à cuire",
				'de-de': "Dicke Haut"
			},
			effect: {
				'en-us': "Persian can't be affected by any Special Conditions.",
				'fr-fr': "Persian ne peut pas être affecté par des États Spéciaux.",
				'de-de': "Snobilikat kann nicht von Speziellen Zuständen betroffen werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Poison Claws",
				'fr-fr': "Griffes empoisonnées",
				'de-de': "Giftkrallen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shining Claws",
				'fr-fr': "Griffes étincelantes",
				'de-de': "Glänzende Krallen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276220,
				tcgplayer: 87984
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276220,
				tcgplayer: 87984
			},
		},
	],
}

export default card
