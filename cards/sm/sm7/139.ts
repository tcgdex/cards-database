import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-139",
	localId: 139,

	// Card informations
	name: {
		en: "The Masked Royal",
		fr: "Royal Mask",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/139/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/139/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/139/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/139/high.png",
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
			fr: "Attachez une carte Énergie de base de votre main à l’un de vos Pokémon Grass, Fire ou Water de Niveau 2.",
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

