import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Relicanth",
		'fr-fr': "Relicanth",
		'de-de': "Relicanth"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		369,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Aqua Lift",
				'fr-fr': "Aqua-élévation",
				'de-de': "Aquatransporter"
			},
			effect: {
				'en-us': "If Relicanth has any Water Energy attached to it, the Retreat Cost for Relicanth is 0.",
				'fr-fr': "Si Relicanth possède des Énergies , son Coût de retraite est de 0.",
				'de-de': "Wenn mindestens 1 -Energie an Relicanth angelegt ist, hat Relicanth Rückzugskosten 0."
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
				'en-us': "Knock Away",
				'fr-fr': "Asticotage",
				'de-de': "Zurückschlagen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 10 Schadenspunkte zu."
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

	thirdParty: {
		cardmarket: 277000,
		tcgplayer: 88686
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
