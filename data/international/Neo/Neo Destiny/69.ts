import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Hitmonchan",
		'fr-fr': "Tygnon",
		'de-de': "Nockchan"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Dodge",
				'fr-fr': "Esquive",
				'de-de': "Dodge"
			},
			effect: {
				'en-us': "If Hitmonchan would be damaged by an attack during your opponent's next turn, flip a coin. If heads, prevent that attack's damage done to Hitmonchan. (Any other effects of attacks still happen.)",
				'fr-fr': "Si une attaque doit infliger des dégâts à Tygnon pendant le prochain tour de votre adversaire, lancez une pièce. Si c'est face, prévenez les dégâts infligés à Tygnon par cette attaque. (Tous les autres effets dus à des attaques subsistent.)",
				'de-de': "If Hitmonchan would be damaged by an attack during your opponent's next turn, flip a coin. If heads, prevent that attack's damage done to Hitmonchan. (Any other effects of attacks still happen.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Supersonic Jab",
				'fr-fr': "Punch ultrason",
				'de-de': "Supersonic Jab"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its punches are blindingly fast, but it can only fight for three minutes before tiring and needing to rest.",
		'fr-fr': "Ses coups sont super rapides, mais il ne peut se battre que pendant trois minutes avant qu'il ne soit fatigué et qu'il ne soit obligé de se reposer."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274721,
				tcgplayer: 86090
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274721,
				tcgplayer: 86090
			}
		}
	]
}

export default card
