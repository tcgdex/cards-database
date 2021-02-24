import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		149,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Plus Δ",
			},
			effect: {
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts d'une attaque de ce Pokémon, récupérez une carte Récompense supplémentaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Wrapped in Wind",
				fr: "Enveloppement Éolien",
			},
			effect: {
				en: "Attach up to 2 basic Energy cards from your hand to this Pokémon.",
				fr: "Attachez jusqu'à 2 cartes Énergie de base de votre main à ce Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
				fr: "Gros Impact",
			},

			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
