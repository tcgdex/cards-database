import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-65",
	localId: 65,

	// Card informations
	name: {
		en: "Sabrina's Suggestion",
		fr: "Suggestion de Morgane",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/65/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/65/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/65/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Votre adversaire dévoile sa main. Vous pouvez choisir une carte Supporter que vous y trouvez et utiliser son effet en tant qu’effet de cette carte.",
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

