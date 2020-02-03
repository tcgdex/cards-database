import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw3/90/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/90/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/90/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/90/high.png",
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
			fr: "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Carapagos que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card

