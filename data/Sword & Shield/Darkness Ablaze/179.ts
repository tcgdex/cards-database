import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Centiskorch V",
		fr: "Scolocendre V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 210,

	types: [
		"Fire",
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Radiating Heat",
				fr: "Chaleur Irradiante"
			},
			effect: {
				en: "You may discard an Energy from this Pokémon. If you do, discard an Energy from your opponent’s Active Pokémon.",
				fr: "Vous pouvez défausser une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Burning Train",
				fr: "Train Brûlant"
			},

			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
