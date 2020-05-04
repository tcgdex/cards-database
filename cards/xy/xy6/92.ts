import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-92",
	localId: 92,

	// Card informations
	name: {
		en: "Trainers' Mail",
		fr: "Courrier du Dresseur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/92/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/92/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 4 cartes du dessus de votre deck. Vous pouvez montrer une carte Dresseur que vous y trouvez (à part Courrier du Dresseur) et l'ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
