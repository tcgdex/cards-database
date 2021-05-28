import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Goupilou",
		en: "Nickit"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	attacks: [{
		name: {
			fr: "Provocation",
			en: "Instigate"
		},

		effect: {
			fr: "Votre adversaire mélange sa main, puis la place en dessous de son deck. S’il place ainsi au moins une carte en dessous de son deck, il pioche 3 cartes.",
			en: "Your opponent shuffles their hand and puts it on the bottom of their deck. If they put any cards on the bottom of their deck in this way, they draw 3 cards."
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