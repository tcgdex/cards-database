import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Surskit",
		'fr-fr': "Arakdo",
		'de-de': "Gehweiher"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [283],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It appears as if it is skating on water. It draws prey with a sweet scent from the tip of its head."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89651,
				cardmarket: 278821
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278821,
				tcgplayer: 89651
			}
		},
	],

}

export default card
