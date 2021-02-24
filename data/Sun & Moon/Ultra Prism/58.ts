import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Giratina ◇",
		fr: "Giratina ",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		487,
	],
	hp: 160,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Chaotic Star",
				fr: "Étoile Chaotique",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach 2 Psychic Energy cards from your hand to it.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez lui attacher 2 cartes Énergie Psychic de votre main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Crisis Dive",
				fr: "Règle pour les cartes  (Prisme Étoile)",
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
			},
			damage: 160,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				fr: "Plongeon Critique",
			},
			effect: {
				fr: "Défaussez 2 Énergies de ce Pokémon.",
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
