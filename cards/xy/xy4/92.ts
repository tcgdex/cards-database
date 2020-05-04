import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu'à 3 cartes dans votre deck et défaussez-les. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
