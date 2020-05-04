import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-102",
	localId: 102,

	// Card informations
	name: {
		en: "Max Elixir",
		fr: "Max Élixir",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/102/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/102/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/102/high",
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
			fr: "Regardez les 6 cartes du dessus de votre deck et attachez une carte Énergie de base que vous y trouvez à un Pokémon de base sur votre Banc. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
