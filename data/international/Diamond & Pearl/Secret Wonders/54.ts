import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'de-de': "Lombrero"
	},

	illustrator: "Kouki Saitou",
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
		'fr-fr': "Nénupiot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Torment",
				'fr-fr': "Supplice",
				'de-de': "Tortur"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent can't play any Supporter cards from his or her hand during his or her next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Supporter de sa main lors de son prochain tour.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" kann dein Gegner in seinem nächsten Zug keine Unterstützerkarten von seiner Hand spielen."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Absorb",
				'fr-fr': "Vol-vie",
				'de-de': "Absorber"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Lombre.",
				'fr-fr': "Retirez à Lombre 2 marqueurs de dégât.",
				'de-de': "Entferne 2 Schadensmarken von Lombrero."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has a mischievous spirit. If it spots an angler, it will tug on the fishing line to interfere.",
	},

	thirdParty: {
		cardmarket: 277807,
		tcgplayer: 86819
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
