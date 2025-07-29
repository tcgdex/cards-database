import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Aron",
		fr: "Galekid Niv. 21",
		de: "Stollunior"
	},

	illustrator: "Takao Unno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		304,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Iron Head",
				fr: "Tête d'acier",
				de: "Eisenschädel"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				de: "Ramme"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278631
	}
}

export default card
