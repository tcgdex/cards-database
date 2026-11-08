import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'de-de': "Vulpix"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [37],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Reheat",
				'fr-fr': "Réchauffer",
				'de-de': "Reheat"
			},
			effect: {
				'en-us': "Discard up to 2 Energy cards from your hand. For each card you discarded, draw 2 cards.",
				'fr-fr': "Défaussez jusqu'à 2 cartes Énergie de votre main. Pour chaque carte défaussée, piochez 2 cartes.",
				'de-de': "Discard up to 2 Energy cards from your hand. For each card you discarded, draw 2 cards."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Confuse Ray"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It controls balls of fire. As it grows, its six tails split from their tips to make more tails."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 90442,
				cardmarket: 278420
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278420,
				tcgplayer: 90442
			}
		}
	],

}

export default card
