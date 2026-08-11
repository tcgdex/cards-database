import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Mothim",
		'fr-fr': "Papilord",
		'de-de': "Moterpel"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		414,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Burmy",
		'fr-fr': "Cheniti",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Silver Wind",
				'fr-fr': "Vent argenté",
				'de-de': "Silberhauch"
			},
			effect: {
				'en-us': "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 40 more damage.",
				'fr-fr': "Lors de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 40 dégâts supplémentaires.",
				'de-de': "Während deines nächsten Zuges, wenn ein Angriff dem Verteidigenden Pokémon Schaden zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Raging Scales",
				'fr-fr': "Écailles enragées",
				'de-de': "Wütende Schuppen"
			},
			effect: {
				'en-us': "If Mothim has any damage counters on it, this attack does 30 damage plus 40 more damage.",
				'fr-fr': "Si Papilord possède des marqueurs de dégât, cette attaque inflige 30 dégâts plus 40 dégâts supplémentaires.",
				'de-de': "Wenn auf Moterpel mindestens 1 Schadensmarke liegt, fügt dieser Angriff 30 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "30+",

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

	description: {
		'en-us': "It loves the honey of flowers and steals honey collected by COMBEE.",
	},

	thirdParty: {
		cardmarket: 277786,
		tcgplayer: 87580
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
