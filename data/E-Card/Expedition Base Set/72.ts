import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
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
				"Colorless",
			],
			name: {
				en: "Bind Wound",
				fr: "Pansement"
			},
			effect: {
				en: "Flip a coin. If heads, remove 2 damage counters from 1 of your Pokémon (1 if it has only 1).",
				fr: "Lancez une pièce. Si c'est face, retirez 2 marqueurs de dégâts d'un de vos Pokémon (1 seul s'il n'en a qu'un)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Dogpile",
				fr: "Empilage"
			},

			effect: {
				en: "Count the number for Pokémon on your Bench. This attack does 10 times that number to the Defending Pokémon, and Chansey does 10 times that number of damage to itself.",
				fr: "Comptez le nombre de Pokémon sur votre Banc. Cette attaque inflige 10 fois ce nombre de dégâts au Pokémon Défenseur, et Leveinard s'inflige 10 fois ce nombre de dégâts."
			},

			damage: "10×"
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
