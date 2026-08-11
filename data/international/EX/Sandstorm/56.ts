import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Aron",
		'fr-fr': "Galekid",
		'de-de': "Stollunior"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [304],

	hp: 50,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Steel Headbutt",
				'fr-fr': "Coup d'boule d'acier",
				'de-de': "Stahl Kopfstoß"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275833,
				tcgplayer: 83631
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275833,
				tcgplayer: 83631
			}
		},
	],

}

export default card
