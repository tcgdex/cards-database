import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-82",
	localId: 82,

	// Card informations
	name: {
		en: "Plume Fossil",
		fr: "Fossile Plume",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/82/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/82/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/82/high",
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
			fr: "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Arkéapti que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
