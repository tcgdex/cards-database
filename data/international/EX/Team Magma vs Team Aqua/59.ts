import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Aron",
		'fr-fr': "Galekid de Team Magma",
		'de-de': "Team Magmas Stollunior"
	},

	illustrator: "Katsura Tabata",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [304],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Dig Under",
				'fr-fr': "Terrassement",
				'de-de': "Dig Under"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275836,
				tcgplayer: 89820
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275836,
				tcgplayer: 89820
			}
		},
	],

}

export default card
