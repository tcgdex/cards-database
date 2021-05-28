import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Hastacuda",
		en: "Barraskewda"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		fr: "Embrochet",
		en: "Arrokuda"
	},

	attacks: [{
		name: {
			fr: "Picpic",
			en: "Peck"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Jet en Spirale",
			en: "Spiral Jet"
		},

		effect: {
			fr: "Défaussez 2 cartes Énergie Water de votre main. Sinon, cette attaque ne fait rien.",
			en: "Discard 2 Water Energy cards from your hand. If you don’t, this attack does nothing."
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