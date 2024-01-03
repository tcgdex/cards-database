import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Granbull",
		de: "Granbull"
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		210,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Snubbull",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Timid Tackle",
				de: "Scheutackle"
			},
			effect: {
				en: "Granbull does 20 damage to itself. Switch Granbull with 1 of your Benched Pokémon.",
				de: "Granbull fügt sich selbst 20 Schadenspunkte zu. Tausche Granbull gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chomp",
				de: "Champ"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each damage counter on Granbull.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Granbull zu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
