import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Whiscash",
		'fr-fr': "Barbicha",
		'de-de': "Welsar"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		340,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Barboach",
		'fr-fr': "Barloche"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury",
				'fr-fr': "Furieux",
				'de-de': "Tobsucht"
			},
			effect: {
				'en-us': "Does 20 damage times the number of damage counters on Whiscash.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre de marqueurs de dégât sur Barbicha.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte für jede Schadensmarke auf Welsar zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnitude",
				'fr-fr': "Ampleur",
				'de-de': "Intensität"
			},
			effect: {
				'en-us': "Does 20 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf der Bank (deinen und denen deines Gegners) 20 Schadenspunkte zu. (Wende Schwäche und Resistenz für Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,


	description: {
		'en-us': "It is very territorial. It repels foes by setting of tremors that extend over a three-mile radius.",
		'fr-fr': "Il est attaché à son territoire. Il repousse l'ennemi en provoquant des secousses qui portent à 5 Km."
	},

	thirdParty: {
		cardmarket: 277669,
		tcgplayer: 90577
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
