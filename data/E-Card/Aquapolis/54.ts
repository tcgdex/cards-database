import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Marowak",
		fr: "Ossatueur",
		de: "Knogga"
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
				fr: "Triple os",
				de: "Triple Bone"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. Flip 3 coins. This attack does 10 damage times the number of heads to that Pokémon. Don't apply Weakness and Resistance.",
				fr: "Choisissez un des Pokémon du Banc de votre adversaire. Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces à ce Pokémon. N'appliquez ni la Faiblesse, ni la Résistance.",
				de: "Choose 1 of your opponent's Benched Pokémon. Flip 3 coins. This attack does 10 damage times the number of heads to that Pokémon. Don't apply Weakness and Resistance."
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
				fr: "Charge-os",
				de: "Bone Rush"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 50 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à obtenir pile. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
				de: "Flip a coin until you get tails. This attack does 50 damage times the number of heads."
			},
			damage: "50x",

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

	thirdParty: {
		cardmarket: 275127,
		tcgplayer: 87225
	}
}

export default card
