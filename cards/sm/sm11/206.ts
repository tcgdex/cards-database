import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-206",
	localId: 206,

	// Card informations
	name: {
		en: "Reset Stamp",
		fr: "Tampon de Réinitialisation",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/206/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/206/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/206/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/206/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 140,
		name: "sadaji"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Votre adversaire mélange sa main avec son deck et pioche une carte pour chacune des cartes Récompense qu’il lui reste.",
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

