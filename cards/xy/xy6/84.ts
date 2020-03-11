import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-84",
	localId: 84,

	// Card informations
	name: {
		en: "Healing Scarf",
		fr: "Foulard Apaisant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/84/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/84/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/84/high",
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
			fr: "Chaque fois que vous attachez une carte Énergie de votre main au Pokémon auquel cette carte est attachée, soignez 20 dégâts à ce Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
