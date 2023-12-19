import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Onix",
		fr: "Onix",
		de: "Onix"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		95,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Crush",
				fr: "Écrase",
				de: "Zermalmer"
			},
			effect: {
				en: "Flip a coin for each Energy attached to Onix. This attack does 20 damage times the number of heads.",
				fr: "Lancez un nombre de pièces équivalent au nombre d'Énergie attachées à Onix. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf so viele Münzen, wie Energie an Onix angelegt ist. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "20x",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
