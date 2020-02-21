import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-105",
	localId: 105,

	// Card informations
	name: {
		en: "Team Plasma Ball",
		fr: "Team Plasma Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/105/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/105/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/105/high",
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
			fr: "Cherchez un Pokémon de la Team Plasma dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
