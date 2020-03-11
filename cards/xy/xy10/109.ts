import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-109",
	localId: 109,

	// Card informations
	name: {
		en: "Random Receiver",
		fr: "Récepteur Aléatoire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/109/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/109/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/109/high",
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
			fr: "Montrez des cartes du dessus de votre deck jusqu'à ce que vous montriez une carte Supporter. Ajoutez-la à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
