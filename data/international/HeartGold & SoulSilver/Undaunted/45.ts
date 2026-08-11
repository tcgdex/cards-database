import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Doduo",
		'fr-fr': "Doduo",
		'de-de': "Dodu"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [84],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'de-de': "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Headstrike",
				'fr-fr': "Double coup d’tête",
				'de-de': "Doppelkopfstoß"
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez un côté pile, cette attaque ne fait rien.",
				'de-de': "Wirf 2 Münzen. Wenn eine oder beide Münzen \"Zahl\" gezeigt haben, hat dieser Angriff keine Auswirkungen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "By alternately raising and lowering its two heads, it balances itself to be more stable while running."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279298,
				tcgplayer: 84865
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279298,
				tcgplayer: 84865
			}
		}
	],

}

export default card
