import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-86",
	localId: 86,

	// Card informations
	name: {
		en: "Luxury Ball",
		fr: "Luxury Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/86/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/86/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/86/high.png",
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
			fr: "Choisissez un Pokémon dans votre deck (Pokémon NIV.X exclus), montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. Si Luxe Ball se trouve dans votre pile de défausse, vous ne pouvez pas jouer cette carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

