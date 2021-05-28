import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Omastar",
		fr: "Amonistar",
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		139,
	],
	hp: 130,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Omanyte",
		fr: "Amonita",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fossil Bind",
				fr: "Lien Fossile",
			},
			effect: {
				en: "As long as you have fewer Pokémon in play than your opponent, they can't play any Item cards from their hand.",
				fr: "Tant que vous avez moins de Pokémon en jeu que votre adversaire, celui-ci ne peut pas jouer de cartes Objet de sa main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
