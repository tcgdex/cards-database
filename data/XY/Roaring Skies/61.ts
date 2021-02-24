import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "M Rayquaza-EX",
		fr: "M Rayquaza-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 230,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Rayquaza-EX",
		fr: "Rayquaza-EX",
	},
	stage: "MEGA",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Jungle Δ",
			},
			effect: {
				fr: "Tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Grass, Fire, Water ou Lightning de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dragon Ascent",
				fr: "Règle des Méga-Évolutions",
			},
			effect: {
				en: "Discard 2 Energy attached to this Pokémon.",
			},
			damage: 300,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Draco Ascension",
			},
			effect: {
				fr: "Défaussez 2 Énergies attachées à ce Pokémon.",
			},
			damage: 300,

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
