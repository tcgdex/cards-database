import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-98",
	localId: 98,

	// Card informations
	name: {
		en: "Sail Fossil",
		fr: "Fossile Nageoire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/98/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/98/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/98/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Amagara que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card

