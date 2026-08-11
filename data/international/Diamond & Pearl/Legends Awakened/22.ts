import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Crawdaunt",
		'fr-fr': "Colhomard",
		'de-de': "Krebutack"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		342,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Corphish",
		'fr-fr': "Krebscorps",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Gripthrow",
				'fr-fr': "Lance-grippe",
				'de-de': "Wurfgriff"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire reprend dans sa main le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" nimmt dein Gegner das Verteidigende Pokémon und alle daran angelegten Karten auf seine Hand zurück."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Prop-up Pinchers",
				'fr-fr': "Pinces calantes",
				'de-de': "Greifzangen"
			},
			effect: {
				'en-us': "If Crawdaunt has a Technical Machine card attached to it, this attack does 50 damage plus 30 more damage.",
				'fr-fr': "Si Colhomard possède une carte Machine Technique, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn an Krebutack eine Technische Maschine angelegt ist, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is a ruffian that uses its pincers to pick up and toss out other Pokémon from its pond.",
		'fr-fr': "C'est un voyou qui utilise ses pinces pour chasser les autres Pokémon hors de sa mare."
	},

	thirdParty: {
		cardmarket: 278171,
		tcgplayer: 84464
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
