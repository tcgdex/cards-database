import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Rillaboom VMAX",
		fr: "Gorythmic VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 330,

	evolveFrom: {
		en: "Rillaboom V",
		fr: "Gorythmic-V"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe"
			},
			effect: {
				en: undefined,
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Max Beating",
				fr: "Battromax"
			},
			effect: {
				en: "You may discard up to 3 Grass Energy from this Pokémon. If you do, this attack does 50 more damage for each card you discarded in this way.",
				fr: "Vous pouvez défausser jusqu’à 3 Énergies Grass de ce Pokémon. Dans ce cas, cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon."
			},
			damage: "130+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	types: ["Grass"],
	regulationMark: "D"
}

export default card
