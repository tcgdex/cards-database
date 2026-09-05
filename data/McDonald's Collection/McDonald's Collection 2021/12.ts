import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Chimchar",
		fr: "Chimpenfeu",
		de: "Panflam"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		391,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fury Swipes",
				fr: "Super Roussi",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage for each heads.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The gas made in its belly burns from its rear end. The fire burns weakly when it feels sick.",
		de: "An seinem Rücken verbrennt es die Gase aus seinem Bauch. Geht es ihm schlecht, leuchtet es weniger hell."
	},

	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538888,
				tcgplayer: 232327
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538893,
				tcgplayer: 232327
			}
		}
	]
}

export default card

