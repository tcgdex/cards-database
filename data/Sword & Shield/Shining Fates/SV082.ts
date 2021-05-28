import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Roublenard",
		en: "Thievul"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Goupilou",
		en: "Nickit"
	},

	attacks: [{
		name: {
			fr: "Larcin",
			en: "Thief"
		},

		effect: {
			fr: "Votre adversaire dévoile sa main. Choisissez-y une carte, puis placez-la en dessous de son deck.",
			en: "Your opponent reveals their hand. Choose a card you find there and put it on the bottom of their deck."
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Croc Obscur",
			en: "Darkness Fang"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card