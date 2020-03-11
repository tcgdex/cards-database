import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-97",
	localId: 97,

	// Card informations
	name: {
		en: "Energy Pouch",
		fr: "Sacoche d'Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/97/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/97/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/97/high",
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
			fr: "Si le Pokémon auquel cette carte est attachée est mis K.O. par les dégâts d'une attaque de votre adversaire, placez toutes les Énergies de base lui étant attachées dans votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
