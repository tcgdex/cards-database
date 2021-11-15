import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard"
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		113,
	],
	hp: 90,
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
				en: "Sing",
				fr: "Berceuse"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Egg Surprise",
				fr: "Oeuf surprise"
			},
			effect: {
				en: "Flip a coin. If heads, Chansey does 50 damage to the Defending Pokémon. If tails, remove 5 damage counters from Chansey. (All if there are less than 5.)",
				fr: "Lancez une pièce. Si c'est face, Leveinard inflige 50 dégâts au Pokémon Défenseur. Si c'est pile, retirez à Leveinard 5 marqueurs de dégât. (Retirez-les lui tous s'il y en a moins de 5.)"
			},

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
