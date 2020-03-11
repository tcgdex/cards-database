import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-73",
	localId: 73,

	// Card informations
	name: {
		en: "Team Flare Grunt",
		fr: "Sbire de la Team Flare",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/73/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/73/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/73/high",
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
			fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
