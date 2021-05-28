import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Triple Draw",
				fr: "Triple Pioche"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Flying Fury",
				fr: "Furie Volante"
			},
			effect: {
				en: "Before doing damage, you may discard any number of Pokémon Tools from your Pokémon. This attack does 40 more damage for each card you discarded in this way.",
				fr: "Avant d’infliger des dégâts, vous pouvez défausser autant de cartes Outil Pokémon que vous le voulez de vos Pokémon. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	regulationMark: "D"
}

export default card
