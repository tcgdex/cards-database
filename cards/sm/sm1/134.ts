import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-134",
	localId: 134,

	// Card informations
	name: {
		en: "Timer Ball",
		fr: "Chrono Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/134/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/134/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/134/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/134/high.png",
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
			fr: "Lancez 2 pièces. Pour chaque côté face, cherchez un Pokémon Évolutif dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

