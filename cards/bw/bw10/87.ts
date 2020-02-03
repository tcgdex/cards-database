import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-87",
	localId: 87,

	// Card informations
	name: {
		en: "Root Fossil Lileep",
		fr: "Fossile Racine Lilia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/87/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/87/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/87/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Lilia que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
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

