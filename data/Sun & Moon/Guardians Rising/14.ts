import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Oricorio",
		fr: "Plumeline",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		741,
	],
	hp: 90,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Passionate Dance",
				fr: "Danse Passionnelle",
			},
			effect: {
				en: "Search your deck for up to 3 Basic Fire Pokémon and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 Pokémon Fire de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Kindle",
				fr: "Enflammer",
			},
			effect: {
				en: "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
