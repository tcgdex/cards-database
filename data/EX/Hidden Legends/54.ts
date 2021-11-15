import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Beldum",
		fr: "Terhal"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		374,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez un Pokémon de base dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Metal Ball",
				fr: "Boule métallique"
			},
			effect: {
				en: "Put 1 damage counter on the Defending Pokémon.",
				fr: "Placez 1 marqueur de dégât sur le Pokémon Défenseur."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
