import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-116",
	localId: 116,

	// Card informations
	name: {
		en: "Kiawe",
		fr: "Kiawe",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/116/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/116/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/116/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/116/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 4 cartes Énergie Fire dans votre deck et attachez-les à l’un de vos Pokémon. Mélangez ensuite votre deck. Votre tour se termine.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
