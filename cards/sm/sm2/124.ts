import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-124",
	localId: 124,

	// Card informations
	name: {
		en: "Enhanced Hammer",
		fr: "Maillet Amélioré",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/124/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/124/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/124/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez une Énergie spéciale attachée à l’un des Pokémon de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
