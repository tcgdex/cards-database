import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Squirtle",
		fr: "Carapuce",
		de: "Schiggy"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		7,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Bubble",
				fr: "Écume",
				de: "Blubber"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Tail",
				fr: "Hydroqueue",
				de: "Nassschweif"
			},
			effect: {
				en: "Flip a coin for each Water Energy attached to Squirtle. This attack does 20 damage plus 10 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Water attachée à Carapuce. Cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				de: "Wirf 1 Münze für jede an Schiggy angelegte -Energie. Dieser Angriff fügt 20 Schadenspunkte plus 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20+",

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
