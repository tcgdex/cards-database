import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Dusknoir",
		fr: "Noctunoir"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Dusclops",
		fr: "Téraclope"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Spectral Breach",
				fr: "Brèche Spectrale"
			},
			effect: {
				en: "All Special Energy attached to Pokémon (both yours and your opponent’s) provide Colorless Energy and have no other effect.",
				fr: "Toutes les Énergies spéciales attachées aux Pokémon (les vôtres et ceux de votre adversaire) fournissent de l’Énergie Colorless et n’ont aucun autre effet."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spooky Shot",
				fr: "Tir Effrayant"
			},

			damage: 120,

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
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
