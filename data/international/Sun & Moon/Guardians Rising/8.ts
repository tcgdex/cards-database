import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
		'es-es': "Wimpod",
		'it-it': "Wimpod",
		'pt-br': "Wimpod",
		'de-de': "Reißlaus"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		767,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scamper Away",
				'fr-fr': "Cavalcade",
				'es-es': "Escabullirse",
				'it-it': "Fuggivia",
				'pt-br': "Escapulir",
				'de-de': "Weghuschen"
			},
			effect: {
				'en-us': "Shuffle this Pokémon and all cards attached to it into your deck.",
				'fr-fr': "Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu baraja y barájalas todas.",
				'it-it': "Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				'pt-br': "Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				'de-de': "Mische dieses Pokémon und alle an es angelegten Karten in dein Deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This Pokémon is a coward. As it desperately dashes off, the flailing of its many legs leaves a sparkling clean path in its wake.",
	},

	thirdParty: {
		cardmarket: 297472,
		tcgplayer: 130693
	}
}

export default card
