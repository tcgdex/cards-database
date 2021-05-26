import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Stonjourner",
		fr: "Dolman"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Kick",
				fr: "Ultimawashi"
			},

			damage: 80,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Press",
				fr: "Étau Puissant"
			},
			effect: {
				en: "If this Pokémon has at least 1 extra Energy attached (in addition to this attack's cost), this attack does 60 more damage.",
				fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 60 dégâts supplémentaires."
			},
			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	hp: 140,
	types: ["Fighting"]
}

export default card
