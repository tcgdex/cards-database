import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada",
	},
	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		199,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Drift Ashore",
				fr: "À la Dérive",
			},
			effect: {
				en: "Search your deck for a card and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Unarmed",
				fr: "Désarmé",
			},
			effect: {
				en: "If you have no cards in your hand, ignore all Energy in this attack's cost.",
				fr: "Si vous n’avez aucune carte dans votre main, ignorez toute l’Énergie dans le coût de cette attaque.",
			},
			damage: 110,

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
