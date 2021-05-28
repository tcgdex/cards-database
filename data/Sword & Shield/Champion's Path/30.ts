import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Lycanroc",
		fr: "Lougaroc"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup Déchirant"
			},
			effect: {
				en: "During your next turn, this Pokémon can’t use Slashing Strike.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup Déchirant."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
