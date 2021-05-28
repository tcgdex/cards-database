import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier"
	},

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Panic Poison",
				fr: "Poison Panique"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned, Confused, and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Wind",
				fr: "Vent Glacial"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 140,
	types: ["Grass"],
	regulationMark: "D"
}

export default card
