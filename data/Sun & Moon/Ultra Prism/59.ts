import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Cresselia",
		fr: "Cresselia",
	},
	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		488,
	],
	hp: 120,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Lunar Payback",
				fr: "Vengeance Lunaire",
			},
			effect: {
				en: "Discard an Energy from this Pokémon. If you do, switch all damage counters on this Pokémon with those on your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, échangez tous les marqueurs de dégâts de ce Pokémon avec ceux du Pokémon Actif de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
