import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Ultra Necrozma",
		fr: "Ultra-Necrozma",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		800,
	],
	hp: 110,
	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ultra Burst",
				fr: "Ultra-Explosion",
			},
			effect: {
				en: "This Pokémon can't attack unless your opponent has 2 or fewer Prize cards remaining.",
				fr: "Ce Pokémon ne peut pas attaquer, à moins qu’il ne reste 2 cartes Récompense ou moins à votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Metal",
			],
			name: {
				en: "Luster of Downfall",
				fr: "Éclat de Déchéance",
			},
			effect: {
				en: "Discard an Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 170,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
