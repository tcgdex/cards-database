import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-209",
	localId: 209,

	// Card informations
	name: {
		en: "Green's Exploration",
		fr: "Exploration de Leaf",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/209/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/209/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/209/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/209/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vos Pokémon en jeu n’ont pas de talents.\n\nCherchez jusqu’à 2 cartes Dresseur dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
