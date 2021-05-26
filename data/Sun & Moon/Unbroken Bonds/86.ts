import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Dugtrio",
		fr: "Triopikeur",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		51,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Home Ground",
				fr: "À Domicile",
			},
			effect: {
				en: "If you have any Stadium card in play, this attack does 60 more damage.",
				fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 30,

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
