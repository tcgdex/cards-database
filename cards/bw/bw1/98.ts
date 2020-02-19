import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-98",
	localId: 98,

	// Card informations
	name: {
		en: "Pokédex",
		fr: "Pokédex",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/98/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/98/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/98/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.ITEM,
	],

	illustrator: {
		id: 63,
		name: "Noriko Hotta"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 5 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l’ordre de votre choix.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card

