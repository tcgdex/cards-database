import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Latios δ",
		fr: "Latios δ ESPÈCES DELTA"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Aura (Duaru oora)",
				fr: "Double aura"
			},
			effect: {
				en: "As long as you have Latias or Latias ex in play, each player's Evolved Pokémon (excluding Pokémon-ex) can't use any Poké-Bodies.",
				fr: "Tant que vous avez Latias ou Latias ex en jeu, les Pokémon Évolués de chaque joueur (Pokémon-ex exclus) ne peuvent pas utiliser de Poké-Bodies."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dive",
				fr: "Plongée"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Blast",
				fr: "Explosion aquatique"
			},
			effect: {
				en: "Discard a Water Energy attached to Latios.",
				fr: "Défaussez une Énergie  attachée à Latios."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
