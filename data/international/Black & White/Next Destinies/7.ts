import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Simisage",
		'fr-fr': "Feuiloutan",
		'es-es': "Simisage",
		'it-it': "Simisage",
		'pt-br': "Simisage",
		'de-de': "Vegichita"
	},

	illustrator: "kawayoo",
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
				"Grass",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collecte",
			},
			effect: {
				'en-us': "Draw 3 cards.",
				'fr-fr': "Piochez 3 cartes.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Stadium Drain",
				'fr-fr': "Vampire de Stade",
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 30 more damage and heal 30 damage from this Pokémon.",
				'fr-fr': "S'il y a une carte Stade en jeu, cette attaque inflige 30 dégâts supplémentaires et vous soignez 30 dégâts à ce Pokémon.",
			},
			damage: 30,

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
		cardmarket: 280232,
		tcgplayer: 89223
	}
}

export default card
