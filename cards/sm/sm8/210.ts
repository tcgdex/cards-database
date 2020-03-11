import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-210",
	localId: 210,

	// Card informations
	name: {
		en: "Kahili",
		fr: "Kahili",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/210/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/210/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/210/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/210/high",
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
			fr: "Piochez 2 cartes. Ensuite, lancez une pièce. Si c’est face, et si vous avez joué cette carte Kahili de votre main, placez cette carte dans votre main plutôt que dans votre pile de défausse Si votre deck ne contient aucune carte, vous ne pouvez pas jouer cette carte.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
