import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-168",
	localId: 168,

	// Card informations
	name: {
		en: "Underground Expedition",
		fr: "Expédition Souterraine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/168/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/168/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/168/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/168/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 4 cartes du dessous de votre deck et ajoutez 2 d’entre elles à votre main. Placez les autres cartes en dessous de votre deck dans l’ordre de votre choix.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

