import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-119",
	localId: 119,

	// Card informations
	name: {
		en: "Great Ball",
		fr: "Super Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/119/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/119/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/119/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer un Pokémon que vous y trouvez et l’ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
