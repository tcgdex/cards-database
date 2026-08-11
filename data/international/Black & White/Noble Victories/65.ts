import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Conkeldurr",
		'fr-fr': "Bétochef",
		'es-es': "Conkeldurr",
		'it-it': "Conkeldurr",
		'pt-br': "Conkeldurr",
		'de-de': "Meistagrif"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		534,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Gurdurr",
		'fr-fr': "Ouvrifier",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Chip Away",
				'fr-fr': "Attrition",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by any effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Défenseur.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Swing Around",
				'fr-fr': "Balançoire",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "They use concrete pillars as walking canes. They know moves that enable them to swing the pillars freely in battle.",
	},

	thirdParty: {
		cardmarket: 280187,
		tcgplayer: 84419
	}
}

export default card
