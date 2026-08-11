import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Rayquaza",
		'fr-fr': "Rayquaza",
		'de-de': "Rayquaza"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Dance",
				'fr-fr': "Danse de dragon",
				'de-de': "Dragon Dance"
			},
			effect: {
				'en-us': "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, the attack does 30 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Lors de votre prochain tour, si 1 de vos Pokémon Actifs inflige des dégâts à 1 des Pokémon Défenseurs, cette attaque inflige 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'de-de': "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, the attack does 30 more damage (before applying Weakness and Resistance)."
			},

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Griffe de dragon",
				'de-de': "Dragon Claw"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276520,
		tcgplayer: 88626
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88626,
				cardmarket: 276520
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 88626,
				cardmarket: 276520
			},
		}
	],
}

export default card
