import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Claydol",
		fr: "Kaorine",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		344,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Rewind",
				fr: "Rembobinage",
			},
			effect: {
				en: "Devolve each of your opponent's evolved Pokémon and put the highest Stage Evolution card on it into your opponent's hand.",
				fr: "Faites dés-évoluer chacun des Pokémon évolués de votre adversaire et mettez sa carte Évolution de plus haut Niveau dans la main de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 30,

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
