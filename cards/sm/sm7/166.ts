import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-166",
	localId: 166,

	// Card informations
	name: {
		en: "Tate & Liza",
		fr: "Lévy et Tatia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/166/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/166/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/166/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/166/high",
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
			fr: "Choisissez l’une de ces options :\n\n• Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.\n• Échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
