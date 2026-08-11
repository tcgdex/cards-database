import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Vespiquen",
		'fr-fr': "Apireine",
		'de-de': "Honweisel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		416,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leaf Honey",
				'fr-fr': "Feuille miel",
				'de-de': "Honigblatt"
			},
			effect: {
				'en-us': "Discard a Grass Energy attached to Vespiquen and remove all damage counters from 1 of your Benched Grass Pokémon.",
				'fr-fr': "Défaussez une Énergie Grass attachée à Apireine et retirez à 1 de vos Pokémon de Banc Grass tous ses marqueurs de dégât.",
				'de-de': "Lege eine -Energie, die an Honweisel angelegt ist, auf deinen Ablagestapel und entferne danach alle Schadensmarken von 1 -Pokémon auf deiner Bank."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Attack Order",
				'fr-fr': "Appel Attak",
				'de-de': "Schlagbefehl"
			},
			effect: {
				'en-us': "Does 10 damage times the number of Grass Pokémon in play (both yours and your opponent's).",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de Pokémon Grass en jeu (les vôtres et ceux de votre adversaire).",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte für jedes -Pokémon im Spiel zu (deine und die deines Gegners)."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its abdomen is a honeycomb for grubs. It raises its grubs on honey collected by COMBEE.",
		'fr-fr': "Son abdomen est un rayon où vivent ses larves, élevées avec le nectar récolté par Apitrini."
	},

	thirdParty: {
		cardmarket: 277538,
		tcgplayer: 90327
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
