import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Hastacuda"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		fr: "Embrochet"
	},

	attacks: [{
		name: {
			fr: "Picpic"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Jet en Spirale"
		},

		effect: {
			fr: "Défaussez 2 cartes Énergie Water de votre main. Sinon, cette attaque ne fait rien."
		},

		damage: 130,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card