import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Swoobat",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Woobat",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unaware",
			},
			effect: {
				en: "Prevent all effects of attacks from your opponent’s Pokémon done to this Pokémon. (Damage is not an effect.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Heart Stamp",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
