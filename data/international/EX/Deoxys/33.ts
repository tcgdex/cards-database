import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'de-de': "Lombrero"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		271,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Lotad",
		'fr-fr': "Nenupiot"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Aqua Lift",
				'fr-fr': "Aqua-élévation",
				'de-de': "Aqua Lift"
			},
			effect: {
				'en-us': "If Lombre has any Water Energy attached to it, the Retreat Cost for Lombre is 0.",
				'fr-fr': "Si Lombre possède une Énergie , son Coût de retraite est de 0.",
				'de-de': "If Lombre has any  Energy attached to it, the Retreat Cost of Lombre is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ambush",
				'fr-fr': "Embuscade",
				'de-de': "Ambush"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Flip a coin. if heads, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86816,
				cardmarket: 276436
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86816,
				cardmarket: 276436
			},
		},
	],

}

export default card
