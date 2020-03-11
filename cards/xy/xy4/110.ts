import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-110",
	localId: 110,

	// Card informations
	name: {
		en: "Xerosic",
		fr: "Xanthin",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/110/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/110/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une carte Outil Pokémon ou Énergie spéciale attachée à un Pokémon en jeu (les vôtres ou ceux de votre adversaire) et défaussez-la.",
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
