import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Milotic C",
		fr: "Milobellus ",
		de: "Milotic C"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		350,
	],
	hp: 90,
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
				en: "Aqua Tail",
				fr: "Hydroqueue",
				de: "Nassschweif"
			},
			effect: {
				en: "Flip a coin for each Water Energy attached to Milotic C. This attack does 10 damage plus 20 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Water attachée à Milobellus . Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				de: "Wirf 1 Münze für jede an Milotic C angelegte -Energie. Dieser Angriff fügt 10 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wrap",
				fr: "Ligotage",
				de: "Wickel"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
