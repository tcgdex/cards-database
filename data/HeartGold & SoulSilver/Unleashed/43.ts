import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Aipom",
		fr: "Capumain",
		de: "Griffel"
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
				en: "Tail Code",
				fr: "Queue codée",
				de: "Schweifcode"
			},
			effect: {
				en: "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon.",
				fr: "Prenez une carte Énergie attachée au Pokémon Défenseur et attachez-la à un autre des Pokémon de votre adversaire.",
				de: "Lege eine an das Verteidigende Pokémon angelegte Energiekarte an 1 anderes Pokémon deines Gegners an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Smash",
				fr: "Éclate-queue",
				de: "Schwanzschmetterer"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
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
		en: "It lives atop tall trees. When leaping from branch to branch, it deftly uses its tail for balance.",
		de: "Es lebt in den Kronen großer Bäume. Es hüpft von Ast zu Ast und balanciert mit seinem Schweif."
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
