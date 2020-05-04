import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-128",
	localId: 128,

	// Card informations
	name: {
		en: "Exp. Share",
		fr: "Multi Exp",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/128/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/128/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/128/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/128/high",
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
			fr: "Lorsque votre Pokémon Actif est mis K.O. par les dégâts d'une attaque de votre adversaire, vous pouvez déplacer une carte Énergie de base qui était attachée au Pokémon mis K.O. vers le Pokémon auquel cette carte est attachée.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
