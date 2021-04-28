import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Latios",
		fr: "Latios",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 120,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Extract",
				fr: "Extraction d’Énergie",
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Luster Purge",
				fr: "Lumi-Éclat",
			},
			effect: {
				en: "Flip a coin. If tails, discard all Energy attached to this Pokémon.",
				fr: "Lancez une pièce. Si c’est pile, défaussez toute l’Énergie de ce Pokémon.",
			},
			damage: 140,

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
