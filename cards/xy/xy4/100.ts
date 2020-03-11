import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-100",
	localId: 100,

	// Card informations
	name: {
		en: "Manectric Spirit Link",
		fr: "Lien Spirituel Élecsprint",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/100/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/100/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Élecsprint-EX.",
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
