import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Latias δ",
		fr: "Latias δ ESPÈCES DELTA"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Aura",
				fr: "Double aura"
			},
			effect: {
				en: "As long as you have Latios or Latios ex in play, each player's Evolved Pokémon (excluding Pokémon-ex) can't use any Poké-Bodies.",
				fr: "Tant que vous avez Latios ou Latios ex en jeu, les Pokémon Évolués de chaque joueur (Pokémon-ex exclus) ne peuvent pas utiliser de Poké-Bodies."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spearhead",
				fr: "Meneur"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Griffe de dragon"
			},

			damage: 40,

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
			type: "Psychic",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
