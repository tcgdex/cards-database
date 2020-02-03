import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-129",
	localId: 129,

	// Card informations
	name: {
		en: "Fresh Water Set",
		fr: "Pack d’Eaux Fraîches",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/129/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/129/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/129/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/129/high.png",
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
			fr: "Soignez 20 dégâts à chacun de vos Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

