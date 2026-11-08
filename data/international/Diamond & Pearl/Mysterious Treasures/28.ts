import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Manectric",
		'fr-fr': "Elecsprint",
		'de-de': "Voltenso"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lightning Twister",
				'fr-fr': "Tornade d'éclairs",
				'de-de': "Blitzwirbel"
			},
			effect: {
				'en-us': "Does 20 damage times the number of basic Energy cards attached to Manectric.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre de cartes Énergie de base attachées à Elecsprint.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an Voltenso angelegten Basis-Energiekarten zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Chain Lightning",
				'fr-fr': "Rafale de foudre",
				'de-de': "Kettenblitz"
			},
			effect: {
				'en-us': "Does 20 damage to each of your opponent's Benched Pokémon that is the same type as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire étant du même type que le Pokémon Défenseur. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners, das denselben Typ wie das Verteidigende Pokémon hat, 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		'en-us': "It discharges electricity from its mane. It creates a thundercloud overhead to drop lightning bolts.",
		'fr-fr': "Il libère l'électricité par sa crinière. Il crée un nuage d'orage pour appeler la foudre."
	},

	thirdParty: {
		cardmarket: 277657,
		tcgplayer: 87160
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
