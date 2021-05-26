import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Togekiss VMAX",
		fr: "Togekiss VMAX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 310,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Togekiss V",
		fr: "Togekiss-V"
	},



	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Max Glide",
				fr: "Glissomax"
			},
			effect: {
				en: "You may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
				fr: "Vous pouvez chercher dans votre deck jusqu’à 2 cartes, puis les ajouter à votre main. Mélangez ensuite votre deck."
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
