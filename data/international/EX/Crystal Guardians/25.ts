import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'de-de': "Meditalis"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		308,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dual Armor",
				'fr-fr': "Double armure",
				'de-de': "Doppelte Rüstung"
			},
			effect: {
				'en-us': "As long as Medicham has any Psychic Energy cards attached to it, Medicham is both Psychic and Fighting type.",
				'fr-fr': "Tant que Charmina possède des cartes Énergie , il est de type  et .",
				'de-de': "Solange an Meditalis mindestens eine -Energiekarte angelegt ist, ist Meditalis ein Pokémon vom Typ  und ."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psyshock",
				'fr-fr': "Choc psy",
				'de-de': "Psychoschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sky Uppercut",
				'fr-fr': "Stratopercut",
				'de-de': "Himmelhieb"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "Der Schaden dieses Angriffs wird durch Resistenz nicht verringert."
			},
			damage: 50,

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
		cardmarket: 277106,
		tcgplayer: 87273
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
