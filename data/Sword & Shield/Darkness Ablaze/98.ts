import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Galarian Sirfetch’d",
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Fightning",
	],

	evolveFrom: {
		en: "Galarian Farfetch’d",
	},

	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Pierce",
			},

			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Meteor Assault",
			},
			effect: {
				en: "This Pokémon can’t use Meteor Assault again until it leaves the Active Spot.",
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
