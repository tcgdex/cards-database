import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-122",
	localId: 122,

	// Card informations
	name: {
		en: "Rotom Dex—Poké Finder Mode",
		fr: "Motisma-Dex – Mode Poké Scope",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/122/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/122/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/122/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 4 cartes du dessus de votre deck et replacez-les dans l’ordre de votre choix ou mélangez-les dans votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
