import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-106",
	localId: 106,

	// Card informations
	name: {
		en: "Eneporter",
		fr: "Énéporteur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/106/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/106/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/106/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/106/high.png",
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
			fr: "Déplacez une Énergie spéciale de l’un des Pokémon de votre adversaire vers un autre de ses Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

