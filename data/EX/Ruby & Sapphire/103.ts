import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Sneasel ex",
		fr: "Farfuret ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		215,
	],
	hp: 80,
	types: [
		"Darkness",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Double Scratch",
				fr: "Double écorchure"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez deux pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de face."
			},
			damage: "10×",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Beat Up",
				fr: "Baston"
			},
			effect: {
				en: "Flip a coin for each of your Pokémon in play (including Sneasel ex). This attack does 20 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque Pokémon que vous avez en jeu (Farfuret Ex inclus). Cette attaque inflige 20 dégâts multipliés par le nombre de face."
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
