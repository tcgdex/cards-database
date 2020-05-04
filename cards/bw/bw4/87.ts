import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-87",
	localId: 87,

	// Card informations
	name: {
		en: "Exp. Share",
		fr: "Multi Exp",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/87/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/87/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
		Tag.TOOL,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Lorsque votre Pokémon Actif est mis K.O. par les dégâts d'une attaque de votre adversaire, vous pouvez déplacer 1 carte Énergie de base qui était attachée au Pokémon mis K.O. vers le Pokémon auquel cette carte est attachée.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
