import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'de-de': "Trasla"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [280],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Future Sight",
				'fr-fr': "Prescience",
				'de-de': "Future Sight"
			},
			effect: {
				'en-us': "Look at the top 5 cards in either player's deck and put them back on top of that player's deck in any order.",
				'fr-fr': "Regardez les 5 cartes du dessus du deck de chaque joueur et replacez-les au dessus du deck de chaque joueur dans n'importe quel ordre.",
				'de-de': "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hypnoblast",
				'fr-fr': "Hypnoblast",
				'de-de': "Hypnoblast"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If its horns capture the warm feelings of people or Pokémon, its body warms up slightly."
	},

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88563,
				cardmarket: 278510
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278510,
				tcgplayer: 88563
			}
		},
		{
			type:"normal",
			stamp: ["michael-pramawat"],
			thirdParty: {
				tcgplayer: 480101
			}
		}
	],

}

export default card
