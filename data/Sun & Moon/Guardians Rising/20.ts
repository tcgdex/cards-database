import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Alolan Sandslash",
		fr: "Sablaireau d’Alola",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		28,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Slush Rush",
				fr: "Chasse-Neige",
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Turn",
				fr: "Tour Fracassant",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
