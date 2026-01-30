import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Medicham",
		fr: "Charmina",
		de: "Meditalis"
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
		en: "Meditite",
		fr: "Méditikka"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Armor",
				fr: "Double armure",
				de: "Doppelte Rüstung"
			},
			effect: {
				en: "As long as Medicham has any Psychic Energy cards attached to it, Medicham is both Psychic and Fighting type.",
				fr: "Tant que Charmina possède des cartes Énergie , il est de type  et .",
				de: "Solange an Meditalis mindestens eine -Energiekarte angelegt ist, ist Meditalis ein Pokémon vom Typ  und ."
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
				en: "Psyshock",
				fr: "Choc psy",
				de: "Psychoschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
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
				en: "Sky Uppercut",
				fr: "Stratopercut",
				de: "Himmelhieb"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verringert."
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
