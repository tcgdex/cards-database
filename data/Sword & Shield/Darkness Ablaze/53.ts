import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Dracovish",
		fr: "Hydragon"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Rare Fossil",
		fr: "Fossile Rare"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Primal Law",
				fr: "Loi Primordiale"
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, your opponent can’t play any Pokémon from their hand to evolve their Pokémon.",
				fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer ses Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
