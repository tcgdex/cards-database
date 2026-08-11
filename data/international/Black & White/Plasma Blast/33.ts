import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Eelektross",
		'fr-fr': "Ohmassacre",
		'es-es': "Eelektross",
		'it-it': "Eelektross",
		'pt-br': "Eelektross",
		'de-de': "Zapplarang"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		604,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Crush and Burn",
				'fr-fr': "Écra-Brûle",
			},
			effect: {
				'en-us': "Discard as many Energy attached to your Pokémon as you like. This attack does 30 damage times the number of Energy cards you discarded.",
				'fr-fr': "Défaussez autant d'Énergies attachées à vos Pokémon que vous voulez. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Tempest",
				'fr-fr': "Tempête Foudre",
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It latches on to prey with its sucker mouth, sinking in its fangs and shocking the prey with powerful electricity.",
	},

	thirdParty: {
		cardmarket: 281054,
		tcgplayer: 85072
	}
}

export default card
