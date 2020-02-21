import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-119",
	localId: 119,

	// Card informations
	name: {
		en: "Colress Machine",
		fr: "Nikodule",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/119/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/119/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/119/high",
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
			fr: "Cherchez une carte Énergie Plasma dans votre deck et attachez-la à 1 de vos Pokémon de la Team Plasma. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
