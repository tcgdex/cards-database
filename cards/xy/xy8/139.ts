import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-139",
	localId: 139,

	// Card informations
	name: {
		en: "Glalie Spirit Link",
		fr: "Lien Spirituel Oniglali",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/139/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/139/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/139/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/139/high",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Oniglali-EX.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
