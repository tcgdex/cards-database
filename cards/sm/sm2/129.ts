import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-129",
	localId: 129,

	// Card informations
	name: {
		en: "Multi Switch",
		fr: "Échange Multiple",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/129/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/129/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/129/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/129/high",
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
			fr: "Déplacez une Énergie de l’un de vos Pokémon de Banc vers votre Pokémon Actif.",
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
