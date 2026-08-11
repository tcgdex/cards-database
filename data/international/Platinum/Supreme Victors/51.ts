import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Bibarel",
		'fr-fr': "Castorno",
		'de-de': "Bidifas"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [400],

	hp: 90,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rolling Tackle",
				'fr-fr': "Roulé-boulé",
				'de-de': "Rolltackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Rap",
				'fr-fr': "Frap' keu",
				'de-de': "Schweifklopfen"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	retreat: 3,

	description: {
		'en-us': "A river dammed by Bibarel will never overflow its banks, which is appreciated by people nearby."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83819,
				cardmarket: 278742
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278742,
				tcgplayer: 83819
			}
		},
	],

}

export default card
