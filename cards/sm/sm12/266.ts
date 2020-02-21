import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-266",
	localId: 266,

	// Card informations
	name: {
		en: "Lana's Fishing Rod",
		fr: "Canne à Pêche de Néphie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/266/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/266/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/266/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/266/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez un Pokémon et une carte Outil Pokémon de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
