import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-128",
	localId: 128,

	// Card informations
	name: {
		en: "Dowsing Machine",
		fr: "Cherch'Objet",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/128/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/128/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/128/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/128/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas défausser 2 cartes, vous ne pouvez pas jouer cette carte.) Placez une carte Dresseur de votre pile de défausse dans votre main.",
		},
	}],







	rarity: Rarity.RareACE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
