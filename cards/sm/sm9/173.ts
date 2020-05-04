import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-173",
	localId: 173,

	// Card informations
	name: {
		en: "Dana",
		fr: "Méridia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/173/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/173/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/173/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/173/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si le Pokémon Actif de votre adversaire est un Pokémon de Niveau 2.\n\nCherchez jusqu’à 2 cartes dans votre deck, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
