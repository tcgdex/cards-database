import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'de-de': "Natu"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		177,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Telekinesis",
				'fr-fr': "Télékinésie",
				'de-de': "Telekinesis"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse et la Résistance.",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87685,
				cardmarket: 276709
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87685,
				cardmarket: 276709
			},
		}
	],
}

export default card
