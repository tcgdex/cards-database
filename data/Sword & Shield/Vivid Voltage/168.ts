import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Talonflame V",
		fr: "Flambusard V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 190,

	types: [
		"Fire",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fast Flight",
				fr: "Envol Soudain"
			},
			effect: {
				en: "If you go first, you can use this attack during your first turn. Discard your hand and draw 6 cards.",
				fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Défaussez votre main et piochez 6 cartes."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Bright Wing",
				fr: "Ailes Lumineuses"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon."
			},
			damage: 160,

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

	regulationMark: "D"
}

export default card
