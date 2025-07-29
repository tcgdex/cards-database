import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Poliwhirl",
		de: "Quaputzi"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		61,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Poliwag",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Twiddle",
				de: "Däumchendrehen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Asleep.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt verwirrt. Bei 'Zahl' schläft das verteidigende Pokémon jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				de: "Doppelkick"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275346
	}
}

export default card
