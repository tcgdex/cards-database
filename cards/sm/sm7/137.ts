import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-137",
	localId: 137,

	// Card informations
	name: {
		en: "Lisia",
		fr: "Atalante",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/137/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/137/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/137/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/137/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 2 cartes  (Prisme Étoile) dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
