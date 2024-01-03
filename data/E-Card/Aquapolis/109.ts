import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Smeargle",
		fr: "Queulorior",
		de: "Farbeagle"
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		235,
	],
	hp: 60,
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
				en: "Paint Trick",
				fr: "Coud'peinture",
				de: "Paint Trick"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. Then, choose 1 of your Benched Pokémon and switch Smeargle with it.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Choisissez ensuite un des Pokémon de votre Banc et échangez-le contre Queulorior.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Confused. Then, choose 1 of your Benched Pokémon and switch Smeargle with it."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Doubleslap",
				fr: "Torgnoles",
				de: "Doubleslap"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Flip 2 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20x",

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
