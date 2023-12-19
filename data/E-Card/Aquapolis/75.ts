import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		133,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charge Up",
				fr: "Chargement",
				de: "Charge Up"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for an Energy card and attach it to Eevee. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, vous pouvez chercher une carte Énergie et l'attacher à Évoli. Mélangez ensuite votre deck.",
				de: "Flip a coin. If heads, search your deck for an Energy card and attach it to Eevee. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
			],

			name: {
				en: "Lunge",
				fr: "Coup rapide",
				de: "Lunge"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Flip a coin. If tails, this attack does nothing."
			},

			damage: 20
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
