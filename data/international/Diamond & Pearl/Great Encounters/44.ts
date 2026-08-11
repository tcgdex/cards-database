import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Loudred",
		'fr-fr': "Ramboum",
		'de-de': "Krakeelo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		294,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Whismur",
		'fr-fr': "Chuchmur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bass Control",
				'fr-fr': "Super basse",
				'de-de': "Basskontrolle"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc).",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stomp",
				'fr-fr': "Écrasement",
				'de-de': "Stampfer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The shock waves from its cries can tip over trucks. It stamps its feet to power up.",
	},

	thirdParty: {
		cardmarket: 277946,
		tcgplayer: 86843
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
