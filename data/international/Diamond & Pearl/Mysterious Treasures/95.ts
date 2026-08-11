import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Remoraid",
		'fr-fr': "Remoraid",
		'de-de': "Remoraid"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		223,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Sharpshooting",
				'fr-fr': "Tir de précision",
				'de-de': "Scharfschuss"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Numbing Water",
				'fr-fr': "Eau paralysante",
				'de-de': "Betäubendes Wasser"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It squirts water forcefully from its mouth to shoot down flying prey.",
		'fr-fr': "Il crache un puissant jet d'eau pour abattre les proies volantes."
	},

	thirdParty: {
		cardmarket: 277724,
		tcgplayer: 88697
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
