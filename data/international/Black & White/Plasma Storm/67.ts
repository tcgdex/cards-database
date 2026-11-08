import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Garbodor",
		'fr-fr': "Miasmax",
		'es-es': "Garbodor",
		'it-it': "Garbodor",
		'pt-br': "Garbodor",
		'de-de': "Deponitox"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		569,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ensnarl",
				'fr-fr': "Empêtrement",
			},
			effect: {
				'en-us': "Does 20 damage times the number of Colorless in the Defending Pokémon's Retreat Cost.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre de Colorless dans le coût de Retraite du Pokémon Défenseur.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Ducts",
				'fr-fr': "Double Boyau",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 80 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 80,

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
		'en-us': "Consuming garbage makes new kinds of poison gases and liquids inside their bodies.",
	},

	thirdParty: {
		cardmarket: 280806,
		tcgplayer: 85620
	}
}

export default card
