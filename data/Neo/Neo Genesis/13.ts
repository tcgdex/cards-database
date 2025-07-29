import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Skarmory",
		fr: "Airmure",
		de: "Panzaeron"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		227,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],

			name: {
				en: "Claw",
				fr: "Mâchoire",
				de: "Claw"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Flip a coin. If tails, this attack does nothing."
			},

			damage: 20
		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steel Wing",
				fr: "Aile d'acier",
				de: "Steel Wing"
			},
			effect: {
				en: "Flip a coin. If heads, all damage done by attacks to Skarmory during your opponent's next turn is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lancez une pièce. Si c'est face, tous les dégâts infligés à Airmure par des attaques pendant le prochain tour de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Flip a coin. If heads, all damage done by attacks to Skarmory during your opponent's next turn is reduced by 20 (after applying Weakness and Resistance)."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	description: {
		fr: "Ses ailes solides semblent lourdes, mais elles sont en fait creuses et légères, lui permettant de voler librement dans le ciel."
	},

	thirdParty: {
		cardmarket: 274413
	}
}

export default card
