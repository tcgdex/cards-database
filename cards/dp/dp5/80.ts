import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-80",
	localId: 80,

	// Card informations
	name: {
		en: "Dusk Ball",
		fr: "Sombre Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/80/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/80/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/80/high",
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
			fr: "Regardez les 7 cartes du dessous de votre deck. Choisissez-y 1 Pokémon, montrez-le à votre adversaire et placez-le dans votre main. Replacez les cartes restantes au dessus de votre deck. Ensuite, mélangez votre deck.",
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
