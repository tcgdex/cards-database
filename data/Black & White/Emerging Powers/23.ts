import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Simipour",
		fr: "Flotoutan",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		516,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Grass' Power",
				fr: "Pouvoir Fertilisant",
			},
			effect: {
				en: "If this Pokémon has any Grass Energy attached to it, heal 20 damage from this Pokémon.",
				fr: "Si de l'Énergie Grass est attachée à ce Pokémon, soignez 20 dégâts à ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rushing Water",
				fr: "Courant Fort",
			},
			effect: {
				en: "Move an Energy attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon.",
				fr: "Déplacez une Énergie attachée au Pokémon Défenseur vers 1 des Pokémon de Banc de votre adversaire.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
