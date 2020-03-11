import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-118",
	localId: 118,

	// Card informations
	name: {
		en: "Ancient Crystal",
		fr: "Cristal Antique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/118/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/118/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/118/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Le Regirock, Regice, Registeel ou Regigigas auquel cette carte est attachée subit 30 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
