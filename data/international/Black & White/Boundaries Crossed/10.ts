import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'es-es': "Shaymin",
		'it-it': "Shaymin",
		'pt-br': "Shaymin",
		'de-de': "Shaymin"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		492,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la Famille",
			},
			effect: {
				'en-us': "Search your deck for 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Leaf Drain",
				'fr-fr': "Feuille Sangsue",
			},
			effect: {
				'en-us': "Flip a coin. If heads, heal 30 damage from this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, soignez 30 dégâts à ce Pokémon.",
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

	retreat: 1,

	description: {
		'en-us': "The flowers all over its body burst into bloom if it is lovingly hugged and senses gratitude.",
	},

	thirdParty: {
		cardmarket: 280597,
		tcgplayer: 89110
	}
}

export default card
