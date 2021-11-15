import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Whiscash",
		fr: "Barbicha"
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		340,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Barboach",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Raging Tremble",
				fr: "Tremblement de rage"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage for each damage counter on Whiscash to each Defending Pokémon. If tails, this attack does 10 damage for each damage counter on Whiscash to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chaque Pokémon Défenseur pour chaque marqueur de dégât sur Barbicha. Si c'est pile, cette attaque inflige 10 dégâts au Pokémon Défenseur pour chaque marqueur de dégât sur Barbicha."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Dwindling Wave",
				fr: "Vague diminutrice"
			},
			effect: {
				en: "Does 70 damage minus 10 damage for each damage counter on Whiscash.",
				fr: "Inflige 70 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Barbicha."
			},
			damage: "70-",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
