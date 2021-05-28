import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Sandygast",
		fr: "Bacabouh"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sneaky Placement",
				fr: "Placement Vicieux"
			},
			effect: {
				en: "Put 1 damage counter on 1 of your opponent’s Pokémon.",
				fr: "Placez un marqueur de dégâts sur l’un des Pokémon de votre adversaire."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 3,
	hp: 80,
	types: ["Psychic"],
	regulationMark: "D"
}

export default card
