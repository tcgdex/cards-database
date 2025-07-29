import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Meowth",
		fr: "Miaouss",
		de: "Mauzi"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				fr: "Double pied",
				de: "Doppelkick"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278805
	}
}

export default card
