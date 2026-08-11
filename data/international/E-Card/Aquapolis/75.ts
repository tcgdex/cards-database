import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'de-de': "Evoli"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [133],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Charge Up",
				'fr-fr': "Chargement",
				'de-de': "Charge Up"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for an Energy card and attach it to Eevee. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, vous pouvez chercher une carte Énergie et l'attacher à Évoli. Mélangez ensuite votre deck.",
				'de-de': "Flip a coin. If heads, search your deck for an Energy card and attach it to Eevee. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
			],

			name: {
				'en-us': "Lunge",
				'fr-fr': "Coup rapide",
				'de-de': "Lunge"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},

			damage: 20
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85080,
				cardmarket: 275149
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85080,
				cardmarket: 275149
			}
		},
	]
}

export default card
