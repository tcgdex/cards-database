import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-149",
	localId: 149,

	// Card informations
	name: {
		en: "Super Rod",
		fr: "Méga Canne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/149/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/149/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/149/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/149/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une combinaison de 3 cartes de Pokémon et d'Énergies de base dans votre pile de défausse et mélangez-les avec votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
