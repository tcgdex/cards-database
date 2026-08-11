import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Cyndaquil",
		'fr-fr': "Héricendre",
		'de-de': "Feurigel"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		155,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Paralyzing Gaze",
				'fr-fr': "Regard paralysant",
				'de-de': "Paralyzing Gaze"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fireworks",
				'fr-fr': "Feux d'artifices",
				'de-de': "Fireworks"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy card attached to Cyndaquil.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une carte Énergie  attachée à Héricendre.",
				'de-de': "Flip a coin. If tails, discard a  Energy card attached to Cyndaquil."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84550,
				cardmarket: 276700
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 84550,
				cardmarket: 276700
			},
		}
	],
}

export default card
