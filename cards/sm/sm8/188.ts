import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-188",
	localId: 188,

	// Card informations
	name: {
		en: "Professor Elm's Lecture",
		fr: "Cours du Professeur Orme",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/188/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/188/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/188/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/188/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hideki Ishikawa",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 3 Pokémon avec 60 PV ou moins dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
