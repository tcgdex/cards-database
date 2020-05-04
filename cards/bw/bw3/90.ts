import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-90",
	localId: 90,

	// Card informations
	name: {
		en: "Cover Fossil",
		fr: "Fossile Plaque",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/90/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/90/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/90/high",
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
			fr: "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Carapagos que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
