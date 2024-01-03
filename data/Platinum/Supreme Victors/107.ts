import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Goldeen",
		fr: "Poissirène",
		de: "Goldini"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		118,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Goldeen.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Poissirène.",
				de: "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Goldini zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie",
				de: "Furienschlag"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
