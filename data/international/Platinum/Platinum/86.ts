import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyena",
		'de-de': "Fiffyen"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [261],

	hp: 50,

	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Howl",
				'fr-fr': "Grondement",
				'de-de': "Howl"
			},
			effect: {
				'en-us': "Search your deck for Poochyena and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez Medhyena dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for Poochyena and put it onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Lunge",
				'fr-fr': "Coup rapide",
				'de-de': "Lunge"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A Pokémon with persistent nature, it chases its prey until the prey becomes exhausted."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88301,
				cardmarket: 278507
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278507,
				tcgplayer: 88301
			}
		}
	],

}

export default card
