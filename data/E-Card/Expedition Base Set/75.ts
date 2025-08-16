import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Dragonair",
		fr: "Draco",
		de: "Dragonir"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Dratini",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Water",
			],
			name: {
				en: "Spiral Wave",
				fr: "Onde spirale",
				de: "Spiralwelle"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à obtenir pile. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf eine Münze, bis du das erste Mal \"Zahl\" wirfst. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	thirdParty: {
		cardmarket: 274950,
		tcgplayer: 84898
	}
}

export default card
