import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Celebi",
		fr: "Celebi"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Energy Press",
				fr: "Pression Énergétique"
			},
			effect: {
				en: "This attack does 30 damage for each Energy attached to your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
			},
			damage: "30×",

		},
		{
			cost: [
				"Lightning",
				"Psychic",
			],
			name: {
				en: "Amazing Bloom",
				fr: "Floraison Magnifique"
			},
			effect: {
				en: "For each of your Benched Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
				fr: "Pour chacun de vos Pokémon de Banc, cherchez dans votre deck une carte Évolution de ce Pokémon-là, puis placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
