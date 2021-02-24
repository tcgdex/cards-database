import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Politoed",
		fr: "Tarpaud",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		186,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Roll Call",
				fr: "Liste d’Appel",
			},
			effect: {
				en: "Search your deck for a Poliwag, a Poliwhirl, and a Poliwrath, and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez un Ptitard, un Têtarte et un Tartard dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Jump",
				fr: "Hyper Saut",
			},
			effect: {
				en: "You may shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
