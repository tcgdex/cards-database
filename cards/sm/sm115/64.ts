import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-64",
	localId: 64,

	// Card informations
	name: {
		en: "Pokémon Center Lady",
		fr: "Dame du Centre Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/64/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/64/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/64/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Soignez 60 dégâts et retirez tous les États Spéciaux de l’un de vos Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
