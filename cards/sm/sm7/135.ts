import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-135",
	localId: 135,

	// Card informations
	name: {
		en: "Last Chance Potion",
		fr: "Potion de la Dernière Chance",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/135/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/135/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/135/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/135/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Soignez 120 dégâts à l’un de vos Pokémon auquel il reste 30 PV ou moins.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

