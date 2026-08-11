import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Doduo",
		'fr-fr': "Doduo",
		'de-de': "Dodu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		84,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Run Around",
				'fr-fr': "Courrir dans tous les sens",
				'de-de': "Run Around"
			},
			effect: {
				'en-us': "Switch Doduo with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Doduo avec 1 des Pokémon de votre Banc.",
				'de-de': "Switch Doduo with 1 of your Benched Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Random Peck",
				'fr-fr': "Coup d'bec au pif",
				'de-de': "Random Peck"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage plus 10 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				'de-de': "Flip 2 coins. This attack does 10 damage plus more damage for each heads."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276238,
				tcgplayer: 84861
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276238,
				tcgplayer: 84861
			},
		},
	],
}

export default card
