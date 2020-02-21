import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-207",
	localId: 207,

	// Card informations
	name: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/207/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/207/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/207/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/207/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Jouez cette carte comme si c’était un Pokémon Colorless de base avec 60 PV. N’importe quand pendant votre tour (avant votre attaque), vous pouvez défausser cette carte du jeu.\n\nCette carte ne peut pas battre en retraite.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
