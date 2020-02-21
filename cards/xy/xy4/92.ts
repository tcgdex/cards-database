import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-92",
	localId: 92,

	// Card informations
	name: {
		en: "Battle Compressor Team Flare Gear",
		fr: "Réducteur de Combat Matos Team Flare",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/92/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/92/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/92/high",
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
			fr: "Cherchez jusqu'à 3 cartes dans votre deck et défaussez-les. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
