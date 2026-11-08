import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Lilligant",
		'fr-fr': "Fragilady",
		'es-es': "Lilligant",
		'it-it': "Lilligant",
		'pt-br': "Lilligant",
		'de-de': "Dressella"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		549,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Return",
				'fr-fr': "Retour",
			},
			effect: {
				'en-us': "Draw cards until you have 6 cards in your hand.",
				'fr-fr': "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magical Leaf",
				'fr-fr': "Feuillemagik",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage and heal 30 damage from this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires et vous soignez 30 dégâts à ce Pokémon.",
			},
			damage: 50,

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

	retreat: 1,

	description: {
		'en-us': "The fragrance of the garland on its head has a relaxing effect, but taking care of it is very difficult.",
	},

	thirdParty: {
		cardmarket: 280604,
		tcgplayer: 86796
	}
}

export default card
