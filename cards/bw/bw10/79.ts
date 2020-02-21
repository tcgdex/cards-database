import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-79",
	localId: 79,

	// Card informations
	name: {
		en: "Cover Fossil",
		fr: "Fossile Plaque",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/79/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/79/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Carapagos que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
