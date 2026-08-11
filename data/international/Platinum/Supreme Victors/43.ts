import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Seaking",
		'fr-fr': "Poissoroy",
		'de-de': "Golking"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [119],

	hp: 90,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Goldeen",
		'fr-fr': "Poissirène"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Horn Pierce",
				'fr-fr': "Corne perçante",
				'de-de': "Hornpiekser"
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si l'une d'elles est pile, cette attaque est sans effet.",
				'de-de': "Wirf 2 Münzen. Wenn mindestens eine Münze \"Zahl\" gezeigt hat, hat dieser Angriff keine Auswirkungen."
			},
			damage: 90,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Endure",
				'fr-fr': "Ténacité",
				'de-de': "Ausdauer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, if Seaking would be Knocked Out by damage from an attack, Seaking is not Knocked Out and its remaining HP becomes 10 instead.",
				'fr-fr': "Lancez une pièce. Si c'est face, si Poissoroy est mis K.O. par des dégâts d'une attaque lors du prochain tour de votre adversaire, il n'est pas mis K.O. À la place, il lui reste 10 PV.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" wird Golking, wenn es im nächsten Zug deines Gegners durch Schaden eines Angriffs kampfunfähig würde, nicht kampfunfähig und hat stattdessen 10 verbliebene KP."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89028,
				cardmarket: 278734
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278734,
				tcgplayer: 89028
			}
		},
	],

}

export default card
