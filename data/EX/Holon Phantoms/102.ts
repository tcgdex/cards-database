import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Gyarados Star δ",
		fr: "Leviator ☆ δ"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Spiral Growth",
				fr: "Croissance en spirale"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, search your discard pile for a basic Energy card and attach it to Gyarados Star.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à Leviator ."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "All-out Blast",
				fr: "Explosion totale"
			},
			effect: {
				en: "Discard cards from the top of your deck until you have 1 card left. This attack does 50 damage plus 20 more damage for each Energy card you discarded in this way.",
				fr: "Défaussez des cartes du dessus de votre deck jusqu'à ce qu'il ne vous reste plus qu'1 carte. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie défaussée."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
