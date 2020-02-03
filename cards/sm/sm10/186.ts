import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-186",
	localId: 186,

	// Card informations
	name: {
		en: "Stealthy Hood",
		fr: "Capuche Furtive",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/186/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/186/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/186/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/186/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Évitez tous les effets des talents de votre adversaire infligés au Pokémon auquel cette carte est attachée. Retirez tous les effets déjà en action.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

