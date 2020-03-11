import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-99",
	localId: 99,

	// Card informations
	name: {
		en: "Captivating Poké Puff",
		fr: "Pofiterole Envoûtante",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/99/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/99/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/99/high",
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
			fr: "Votre adversaire montre sa main. Placez tout nombre de Pokémon de base que vous y trouvez sur le Banc de votre adversaire.",
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
