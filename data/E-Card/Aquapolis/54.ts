import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Marowak",
		fr: "Ossatueur"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 70,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Cubone",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Triple Bone",
				fr: "Triple os"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. Flip 3 coins. This attack does 10 damage times the number of heads to that Pokémon. Don't apply Weakness and Resistance.",
				fr: "Choisissez un des Pokémon du Banc de votre adversaire. Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces à ce Pokémon. N'appliquez ni la Faiblesse, ni la Résistance."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bone Rush",
				fr: "Charge-os"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 50 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à obtenir pile. Cette attaque inflige 50 dégâts multipliés par le nombre de faces."
			},
			damage: "50×",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
