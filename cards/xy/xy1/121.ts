import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-121",
	localId: 121,

	// Card informations
	name: {
		en: "Muscle Band",
		fr: "Bandeau Muscle",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/121/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/121/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/121/high",
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
			fr: "Les attaques du Pokémon auquel cette carte est attachée infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
