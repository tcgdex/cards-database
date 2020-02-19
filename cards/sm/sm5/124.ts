import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-124",
	localId: 124,

	// Card informations
	name: {
		en: "Gardenia",
		fr: "Flo",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/124/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/124/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/124/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/124/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Soignez 80 dégâts à l’un de vos Pokémon auquel de l’Énergie Grass est attachée.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

