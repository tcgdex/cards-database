import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Metang",
		'fr-fr': "Metang",
		'de-de': "Metang"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [375],

	hp: 80,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Beldum",
		'fr-fr': "Terhal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncer",
				'de-de': "Einhämmern"
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Smash",
				'fr-fr': "Double écrasement",
				'de-de': "Doppelstoß"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
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
		'en-us': "When two Beldum fuse together, a magnetic nervous system places their brains in union."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279283,
				tcgplayer: 87382
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279283,
				tcgplayer: 87382
			}
		}
	],

}

export default card
