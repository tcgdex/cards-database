import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Fearow",
		fr: "Rapasdepic",
		de: "Ibitak"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		22,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Spearow",
		fr: "Piafabec",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-aile",
				de: "Flügelschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Repeating Drill",
				fr: "Multivrille",
				de: "Mehrfach-Bohrer"
			},
			effect: {
				en: "Flip 5 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 5 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 5 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

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
		en: "It shoots itself suddenly high into the sky, then plummets down in one fell swoop to strike its prey."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279171
	}
}

export default card
