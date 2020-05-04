import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-92",
	localId: 92,

	// Card informations
	name: {
		en: "Call Energy",
		fr: "Appel à l'énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/92/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/92/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Takumi Akabane",



	attacks: [{
		name: {},
		text: {
			fr: "Appel à l'énergie fournit de l'Énergie Colorless. Une seule fois lors de votre tour, si le Pokémon auquel Appel à l'énergie est attachée est votre Pokémon Actif, vous pouvez choisir dans votre deck jusqu'à 2 Pokémon de base et les placer sur votre Banc. Mélangez alors votre deck. Votre tour est terminé.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
