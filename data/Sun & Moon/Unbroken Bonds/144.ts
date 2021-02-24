import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Raticate",
		fr: "Rattatac",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		20,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Escaping Incisors",
				fr: "Incisives Fugueuses",
			},
			effect: {
				en: "If your opponent's Active Pokémon is an Evolution Pokémon, switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
