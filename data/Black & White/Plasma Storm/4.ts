import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Combee",
		fr: "Apitrini",
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		415,
	],
	hp: 30,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sting Missile",
				fr: "Dard-Missile",
			},
			effect: {
				en: "Shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
