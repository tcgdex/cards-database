import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Wimpod",
		fr: "Sovkipou",
		es: "Wimpod",
		it: "Wimpod",
		pt: "Wimpod",
		de: "Reißlaus"
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
				en: "Scamper Away",
				fr: "Cavalcade",
				es: "Escabullirse",
				it: "Fuggivia",
				pt: "Escapulir",
				de: "Weghuschen"
			},
			effect: {
				en: "Shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				es: "Pon este Pokémon y todas las cartas unidas a él en tu baraja y barájalas todas.",
				it: "Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				pt: "Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				de: "Mische dieses Pokémon und alle an es angelegten Karten in dein Deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
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

	thirdParty: {
		cardmarket: 297472
	}
}

export default card
