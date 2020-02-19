import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-102",
	localId: 102,

	// Card informations
	name: {
		en: "Beast Ring",
		fr: "Cercle Chimérique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/102/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/102/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/102/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/102/high.png",
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
			fr: "Vous ne pouvez jouer cette carte que s’il reste exactement 3 ou 4 cartes Récompense à votre adversaire.\n\nCherchez jusqu’à 2 cartes Énergie de base dans votre deck et attachez-les à l’une de vos Ultra-Chimères. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

