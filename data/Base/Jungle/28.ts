import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Vaporeon",
		fr: "Aquali",
		de: "Aquana"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu; bei \"Zahl\" fügt dieser Angriff 10 Schaden zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Aquaknarre"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Energy attached to Vaporeon but not used to pay for this attack's Energy cost. Extra Energy after the 2nd doesn't count.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Aquali en plus du coût en Énergie de cette attaque. Les Énergies  supplémentaires après la seconde ne comptent pas.",
				de: "Fügt 30 Schadenspunkte plus 10 weitere Scadenspunkte für jede auf Aquana abgelegte  Energie zu, die nicht zum Zahler der Energiekosten für diesen Angriff verwendet wurde. Du kannst nicht mehr als 20 Schaenspunkte auf diese Weise hinzufügen."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Il vit au bord de l'eau. Sa queue lui donne l'apparence d'une sirène."
	},

	thirdParty: {
		cardmarket: 273809,
		tcgplayer: 106990
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	],
}

export default card
