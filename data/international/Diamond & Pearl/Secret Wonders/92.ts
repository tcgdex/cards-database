import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot",
		'de-de': "Loturzel"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		270,
	],

	hp: 50,

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
				'en-us': "Water Sport",
				'fr-fr': "Tourniquet",
				'de-de': "Nassmacher"
			},
			effect: {
				'en-us': "If Lotad has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Si Nénupiot possède moins d'Énergie que le Pokémon Défenseur, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn an das Verteidigende Pokémon mehr Energie angelegt ist als an Lotuzel, fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ramme"
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
		'en-us': "It looks like an aquatic plant and serves as a ferry to Pokémon that can't swim.",
	},

	thirdParty: {
		cardmarket: 277845,
		tcgplayer: 86836
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
