import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-131",
	localId: 131,

	// Card informations
	name: {
		en: "Friend Ball",
		fr: "Copain Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/131/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/131/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/131/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/131/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Katsura Tabata",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez dans votre deck un Pokémon du même type que l’un des Pokémon en jeu de votre adversaire, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
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
