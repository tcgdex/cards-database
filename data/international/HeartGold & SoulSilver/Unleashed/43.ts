import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'de-de': "Griffel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [190],

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
				'en-us': "Tail Code",
				'fr-fr': "Queue codée",
				'de-de': "Schweifcode"
			},
			effect: {
				'en-us': "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon.",
				'fr-fr': "Prenez une carte Énergie attachée au Pokémon Défenseur et attachez-la à un autre des Pokémon de votre adversaire.",
				'de-de': "Lege eine an das Verteidigende Pokémon angelegte Energiekarte an 1 anderes Pokémon deines Gegners an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Smash",
				'fr-fr': "Éclate-queue",
				'de-de': "Schwanzschmetterer"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives atop tall trees. When leaping from branch to branch, it deftly uses its tail for balance."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83492,
				cardmarket: 279199
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83492,
				cardmarket: 279199
			}
		},
		{
			type: "normal",
			stamp: ["comic-con"],
		},
		{
			type: "normal",
			stamp: ["snowflake"],
			languages: ["de"]
		}
	],

}

export default card
