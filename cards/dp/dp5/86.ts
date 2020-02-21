import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-86",
	localId: 86,

	// Card informations
	name: {
		en: "Quick Ball",
		fr: "Rapide Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/86/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/86/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/86/high",
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
			fr: "Retournez des cartes de votre deck jusqu'à ce que vous retourniez un Pokémon. Montrez-le à votre adversaire et placez-le dans votre main. Mélangez les autres cartes à votre deck. (Si vous ne retournez pas de Pokémon, mélangez toutes les cartes retournées à votre deck.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
