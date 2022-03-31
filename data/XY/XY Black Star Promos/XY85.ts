import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Hoopa EX",
		fr: "Hoopa EX",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		720,
	],
	hp: 140,
	types: [
		"Psychic",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hyperspace Ring",
				fr: "Anneau Hyperespace",
			},
			effect: {
				en: "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 cartes Objet dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Wonder Trick",
			},
			effect: {
				en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
