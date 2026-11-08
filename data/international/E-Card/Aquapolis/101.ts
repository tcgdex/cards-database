import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Pinsir",
		'fr-fr': "Scarabrute",
		'de-de': "Pinsir"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [127],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Horn Grab",
				'fr-fr': "Attrap'korne",
				'de-de': "Horngrapscher"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähm, bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},

			damage: 20
		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],

			name: {
				'en-us': "Super Slice",
				'fr-fr': "Super tranche",
				'de-de': "Superschnippler"
			},

			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez un pile, cette attaque ne fait rien.",
				'de-de': "Wirf 2 Münzen. Wenn mindestens eine von beiden Zahl zeigt, hat dieser Angriff keine Auswirkungen."
			},

			damage: 90
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 88134,
				cardmarket: 275176
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88134,
				cardmarket: 275176
			}
		},
	]
}

export default card
