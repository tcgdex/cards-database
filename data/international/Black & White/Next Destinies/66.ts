import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Hippowdon",
		'fr-fr': "Hippodocus",
		'es-es': "Hippowdon",
		'it-it': "Hippowdon",
		'pt-br': "Hippowdon",
		'de-de': "Hippoterus"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		450,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sand Bazooka",
				'fr-fr': "Canon à Sable",
			},
			effect: {
				'en-us': "You may move a basic Energy attached to this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez déplacer une Énergie de base attachée à ce Pokémon vers 1 de vos Pokémon de Banc.",
			},
			damage: 70,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Tumble",
				'fr-fr': "Roule-Pierre",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It is surprisingly quick to anger. It holds its mouth agape as a display of its strength.",
	},

	thirdParty: {
		cardmarket: 280291,
		tcgplayer: 86086
	}
}

export default card
