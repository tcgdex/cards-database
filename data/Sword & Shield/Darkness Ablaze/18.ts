import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Golisopod",
		fr: "Sarmuraï"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Wimpod",
		fr: "Sovkipou"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hard Times Slash",
				fr: "Taillade en Panique"
			},
			effect: {
				en: "This attack does 50 more damage for each of your opponent’s Pokémon V and Pokémon-GX in play.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chacun des Pokémon-V et Pokémon-GX en jeu de votre adversaire."
			},
			damage: "30+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Turn",
				fr: "Tour Fracassant"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon contre l’un de vos Pokémon de Banc."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
