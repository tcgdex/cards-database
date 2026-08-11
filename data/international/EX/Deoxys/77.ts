import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
		'de-de': "Sterndu"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
	],

	hp: 50,

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
				'en-us': "Rapid Spin",
				'fr-fr': "Tour rapide",
				'de-de': "Rapid Spin"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch Staryu with 1 of your Benched Pokémon, if any.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur contre 1 des Pokémon de son Banc, s'il en a. Vous échangez Stari contre 1 des Pokémon de votre Banc, si vous en avez.",
				'de-de': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch Staryu with 1 of your Benched Pokémon, if any."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89547,
				cardmarket: 276480
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89547,
				cardmarket: 276480
			},
		},
	],

}

export default card
