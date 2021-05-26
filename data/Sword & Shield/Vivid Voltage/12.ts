import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Shiftry",
		fr: "Tengalice"
	},
	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shifty Substitution",
				fr: "Changement Malicieux"
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, each Supporter card in your opponent’s hand has the effect \"Draw 3 cards.\" (This happens instead of the card’s usual effect.)",
				fr: "Tant que ce Pokémon est sur le Poste Actif, chaque carte Supporter dans la main de votre adversaire a l’effet « Piochez 3 cartes. » (Ceci prévaut sur l’effet habituel de la carte.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Fan Tornado",
				fr: "Tornade Soufflante"
			},
			effect: {
				en: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Vous pouvez demander à votre adversaire d’échanger son Pokémon Actif contre l’un de ses Pokémon de Banc."
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
