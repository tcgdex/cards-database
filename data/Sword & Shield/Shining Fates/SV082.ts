import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Roublenard"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Goupilou"
	},

	attacks: [{
		name: {
			fr: "Larcin"
		},

		effect: {
			fr: "Votre adversaire dévoile sa main. Choisissez-y une carte, puis placez-la en dessous de son deck."
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Croc Obscur"
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