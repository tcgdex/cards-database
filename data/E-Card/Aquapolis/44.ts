import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Zapdos",
		fr: "Electhor"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		145,
	],
	hp: 80,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Anti",
				fr: "Anti-éclair"
			},
			effect: {
				en: "Lightning - You can't attach Lightning Energy cards from your hand to Zapdos.",
				fr: "Vous ne pouvez pas attacher de cartes Énergie  depuis votre main à Electhor."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Plasma",
				fr: "Plasma"
			},
			effect: {
				en: "If there are any Energy cards in your discard pile, flip a coin. If heads attach 1 of those Energy cards to Zapdos.",
				fr: "Si vous avez des cartes Énergie  dans votre pile de défausse, lancez une pièce. Si c'est face, attachez l'une d'elles à Electhor."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Storm",
				fr: "Orage d'éclairs"
			},
			effect: {
				en: "Flip a coin. If tails, put 2 damage counters on Zapdos.",
				fr: "Lancez une pièce. Si c'est face, placez 2 marqueurs de dégâts sur Electhor."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
