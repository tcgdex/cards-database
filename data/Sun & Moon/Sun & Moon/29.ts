import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Golduck",
		fr: "Akwakwak",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		55,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Double Jet",
				fr: "Jets Doubles",
			},
			effect: {
				en: "Discard up to 2 Water Energy cards from your hand. This attack does 60 damage for each card you discarded in this way.",
				fr: "Défaussez jusqu’à 2 cartes Énergie Water de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			},
			damage: 60,

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
