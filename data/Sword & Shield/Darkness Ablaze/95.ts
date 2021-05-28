import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Rhyperior V",
		fr: "Rhinastoc V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 230,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drill Run",
				fr: "Tunnelier"
			},
			effect: {
				en: "Discard an Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire."
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
				en: "Heavy Rock Artillery",
				fr: "Artillerie Roche Lourde"
			},
			effect: {
				en: "During your next turn, this Pokémon can’t use Heavy Rock Artillery.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Artillerie Roche Lourde."
			},
			damage: 210,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
