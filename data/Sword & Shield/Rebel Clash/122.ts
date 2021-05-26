import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Malamar VMAX",
		fr: "Sepiatroce VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Malamar V",
		fr: "Sepiatroce-V"
	},

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Max Jammer",
				fr: "Bloquomax"
			},
			effect: {
				en: "Your opponent reveals their hand. Choose a card you find there and put it on the bottom of their deck.",
				fr: "Votre adversaire dévoile sa main. Choisissez-y une carte, puis placez-la en dessous de son deck."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 310,
	types: ["Darkness"]
}

export default card
