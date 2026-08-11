import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
		'de-de': "Voltilamm"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		179,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Static Electricity",
				'fr-fr': "Électricité statique",
				'de-de': "Static Electricity"
			},
			effect: {
				'en-us': "For each Mareep in play, you may search your deck for a Energy card and attach it to Mareep. Shuffle your deck afterward.",
				'fr-fr': "Pour chaque Wattouat en jeu, vous pouvez chercher une carte Énergie  dans votre deck et l'attacher à Mareep. Mélangez ensuite votre deck.",
				'de-de': "For each Mareep in play, you may search your deck for a  Energy card and attach it to Mareep. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thundershock",
				'fr-fr': "Éclair",
				'de-de': "Thundershock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "If static electricity builds in its body, its fleece doubles in volume. Touching it will shock you.",
		'fr-fr': "Si de l'électricité statique s'accumule dans son corps, sa toison double de volume. Tout contact avec lui vous électrocute."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274465,
				tcgplayer: 87193
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274465,
				tcgplayer: 87193
			}
		}
	]
}

export default card
