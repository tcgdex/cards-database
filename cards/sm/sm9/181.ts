import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-181",
	localId: 181,

	// Card informations
	name: {
		en: "Sabrina's Suggestion",
		fr: "Suggestion de Morgane",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/181/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/181/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/181/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/181/high.png",
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







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

