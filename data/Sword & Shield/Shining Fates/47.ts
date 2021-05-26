import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Goupilou"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	attacks: [{
		name: {
			fr: "Provocation"
		},

		effect: {
			fr: "Votre adversaire mélange sa main, puis la place en dessous de son deck. S’il place ainsi au moins une carte en dessous de son deck, il pioche 3 cartes."
		},

		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card