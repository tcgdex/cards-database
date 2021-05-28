import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zygarde",
		fr: "Zygarde"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Beam",
				fr: "Rayon"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Core Avenger",
				fr: "Cœur Justicier"
			},
			effect: {
				en: "If you have more Prize cards remaining than your opponent, this attack does 80 more damage.",
				fr: "S’il vous reste plus de cartes Récompense qu’à votre adversaire, cette attaque inflige 80 dégâts supplémentaires."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
