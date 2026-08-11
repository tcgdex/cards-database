import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Relicanth",
		'fr-fr': "Relicanth",
		'es-es': "Relicanth",
		'it-it': "Relicanth",
		'pt-br': "Relicanth",
		'de-de': "Relicanth"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		369,
	],

	hp: 90,

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
				'en-us': "Fossil Hunt",
				'fr-fr': "Chasse au Fossile",
			},
			effect: {
				'en-us': "Put 2 Item cards that have Fossil in their names from your discard pile into your hand.",
				'fr-fr': "Ajoutez 2 cartes Objet qui ont Fossile dans leur nom de votre pile de défausse à votre main.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A rare Pokémon discovered during a deep-sea exploration. It has not changed in over 100 million years.",
	},

	thirdParty: {
		cardmarket: 281045,
		tcgplayer: 88691
	}
}

export default card
