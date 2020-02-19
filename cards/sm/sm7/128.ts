import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-128",
	localId: 128,

	// Card informations
	name: {
		en: "Energy Recycle System",
		fr: "Recyclage d’Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/128/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/128/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/128/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/128/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 156,
		name: "Zu-Ka"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l’une de ces options :\n\n• Ajoutez une carte Énergie de base de votre pile de défausse à votre main.\n• Mélangez 3 cartes Énergie de base de votre pile de défausse avec votre deck.",
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

