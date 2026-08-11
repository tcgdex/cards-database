import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Mr. Mime",
		'fr-fr': "M. Mime",
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bench Barrier",
				'fr-fr': "Barrière de Banc",
			},
			effect: {
				'en-us': "Prevent all damage done to your Benched Pokémon by attacks.",
				'fr-fr': "Évitez tous les dégâts infligés à vos Pokémon de Banc par des attaques.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Juggling",
				'fr-fr': "Jonglerie",
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is adept at conning people. It is said to be able to create walls out of thin air by miming.",
	},

	thirdParty: {
		cardmarket: 288490,
		tcgplayer: 113710
	}
}

export default card
