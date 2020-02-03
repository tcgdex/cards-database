import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-99",
	localId: 99,

	// Card informations
	name: {
		en: "Fairy Drop",
		fr: "Pastilles Féériques",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/99/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/99/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/99/high.png",
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
			fr: "Soignez 50 dégâts à l'un de vos Pokémon auquel de l'Énergie Fairy est attachée.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

