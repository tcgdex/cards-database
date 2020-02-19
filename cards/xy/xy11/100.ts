import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-100",
	localId: 100,

	// Card informations
	name: {
		en: "Claw Fossil Anorith",
		fr: "Fossile Griffe Anorith",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/100/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/100/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/100/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/100/high.png",
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
			fr: "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Anorith que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

