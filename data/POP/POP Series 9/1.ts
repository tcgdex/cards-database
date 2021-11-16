import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Gabite",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],

			name: {
				en: "Dragon Rage",
				fr: "Draco-Rage"
			},

			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien."
			},

			damage: 80
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jet Sword",
				fr: "Jet Sword"
			},
			effect: {
				en: "Discard 2 Energy attached to Garchomp and this attack does 10 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez deux Énergies attachées à Carchacrok. Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+30"
		},
	],

	retreat: 0,

	description: {
		en: "It flies at speeds equal to a jet fighter plane. It never allows its prey to escape.",
		fr: "Il vole à la vitesse d'un avion à réaction et ne lâche jamais sa proie."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
