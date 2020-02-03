import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-103",
	localId: 103,

	// Card informations
	name: {
		en: "Bonnie",
		fr: "Clem",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/103/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/103/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/103/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/103/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 83,
		name: "Hideki Ishikawa"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que s’il y a une carte Stade en jeu.\n\nDéfaussez la carte Stade. Pendant ce tour, votre Zygarde-GX peut utiliser son attaque GX même si vous avez déjà utilisé votre attaque GX.",
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

