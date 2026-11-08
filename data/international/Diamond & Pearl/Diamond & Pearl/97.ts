import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
		'de-de': "Samurzel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		273,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bide",
				'fr-fr': "Patience",
				'de-de': "Geduld"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, if Seedot would be Knocked Out by damage from an attack, Seedot is not Knocked Out and its remaining HP becomes 10 instead.",
				'fr-fr': "Lancez une pièce. Si c'est face, lors du prochain tour de votre adversaire, si Grainipiot doit être mis K.O par des dégâts infligés par une attaque, il n'est pas mis K.O et ses PV restants sont de 10.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' wird Samurzel im nächsten Zug deines Gegners, wenn er durch Schaden eines Angriffs kampfunfähig würde, nicht kampfunfähig und hat stattdessen 10 verbliebene KP."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Walzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it dangles from a tree branch, it looks just like an acorn. It enjoys scaring other Pokémon.",
		'fr-fr': "Il ressemble à un gland pendu à une branche. Il adore effrayer les autres Pokémon."
	},

	thirdParty: {
		cardmarket: 277596,
		tcgplayer: 89043
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
