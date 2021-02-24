import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Cacturne",
		fr: "Cacturne",
	},
	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		332,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Spike Rend",
				fr: "Pointe Déchirante",
			},
			effect: {
				en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Hunt",
				fr: "Chasse",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 40 damage to the new Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 40 dégâts au nouveau Pokémon Actif.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
