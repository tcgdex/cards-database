import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-120",
	localId: 120,

	// Card informations
	name: {
		en: "Night Maintenance",
		fr: "Maintenance nocturne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/120/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/120/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/120/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez dans votre pile de défausse une combinaison de jusqu'à 3 Pokémon et cartes Énergie de base. Montrez-les à votre adversaire et mélangez-les à votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
