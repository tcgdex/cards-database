import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-95",
	localId: 95,

	// Card informations
	name: {
		en: "Gengar Spirit Link",
		fr: "Lien Spirituel Ectoplasma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/95/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/95/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Ectoplasma-EX.",
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
