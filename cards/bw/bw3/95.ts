import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-95",
	localId: 95,

	// Card informations
	name: {
		en: "Super Rod",
		fr: "Méga Canne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/95/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/95/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une combinaison de 3 cartes de Pokémon et d'Énergies de base dans votre pile de défausse et mélangez-les avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
