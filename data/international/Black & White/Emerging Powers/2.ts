import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Simisage",
		'fr-fr': "Feuiloutan",
		'es-es': "Simisage",
		'it-it': "Simisage",
		'pt-br': "Simisage",
		'de-de': "Vegichita"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		512,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Pansage",
		'fr-fr': "Feuillajou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire's Power",
				'fr-fr': "Pouvoir Incendiaire",
			},
			effect: {
				'en-us': "If this Pokémon has any Fire Energy attached to it, the Defending Pokémon is now Burned.",
				'fr-fr': "Si de l'Énergie Fire est attachée à ce Pokémon, le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Seed Bomb",
				'fr-fr': "Canon Graine",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter.",
	},

	thirdParty: {
		cardmarket: 279967,
		tcgplayer: 89222
	}
}

export default card
