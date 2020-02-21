import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-96",
	localId: 96,

	// Card informations
	name: {
		en: "Maintenance",
		fr: "Entretien",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/96/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/96/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez 2 cartes de votre main avec votre deck. (Si vous ne pouvez pas mélanger 2 cartes avec votre deck, vous ne pouvez pas jouer cette carte.) Ensuite, piochez une carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
