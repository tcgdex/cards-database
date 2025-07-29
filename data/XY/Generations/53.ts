import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Meowth",
		fr: "Miaouss",
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
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
				en: "Exhausted Tackle",
				fr: "Tacle Épuisé",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage to your opponent's Active Pokémon. If tails, this Pokémon does 30 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts au Pokémon Actif de votre adversaire. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 288491
	}
}

export default card
