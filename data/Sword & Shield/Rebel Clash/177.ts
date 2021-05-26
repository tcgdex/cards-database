import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Ninetales V",
		fr: "Feunard V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Nine-Tailed Shapeshifter",
				fr: "Polymorphe Multicaudal"
			},
			effect: {
				en: "Choose 1 of your opponent’s Active Pokémon’s attacks and use it as this attack.",
				fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon."
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

	retreat: 2,
	hp: 200,
	types: ["Fire"]
}

export default card
