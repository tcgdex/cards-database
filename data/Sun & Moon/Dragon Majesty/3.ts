import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
	},
	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 160,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Resolute Flame",
				fr: "Flamme Résolue",
			},
			effect: {
				en: "This Pokémon's attacks do 30 more damage to your opponent's Active Pokémon for each of their Pokémon-GX and Pokémon-EX in play.",
				fr: "Les attaques de ce Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire pour chacun de ses Pokémon-GX et Pokémon-EX en jeu.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fiery Blast",
				fr: "Explosion Ardente",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
