import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino",
		'de-de': "Nidorino"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [33],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Nidoran♂",
		'fr-fr': "Nidoran"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],

			name: {
				'en-us': "Poison Horn",
				'fr-fr': "Corne empoisonnée",
				'de-de': "Gifthorn"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet."
			},

			damage: 10
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "Nidorino does 10 damage to itself.",
				'fr-fr': "Nidorino s'inflige 30 dégâts.",
				'de-de': "Nidorino fügt sich selber 10 Schadenspunkte zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87742,
				cardmarket: 275128
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87742,
				cardmarket: 275128
			}
		},
	]
}

export default card
