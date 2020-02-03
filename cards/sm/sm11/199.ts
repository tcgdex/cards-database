import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-199",
	localId: 199,

	// Card informations
	name: {
		en: "Grimsley",
		fr: "Pieris",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/199/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/199/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/199/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/199/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 36,
		name: "kodama"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Déplacez jusqu’à 3 marqueurs de dégâts de l’un des Pokémon de votre adversaire vers un autre de ses Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

