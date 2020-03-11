import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-106",
	localId: 106,

	// Card informations
	name: {
		en: "Target Whistle Team Flare Gear",
		fr: "Sifflet de Rappel Matos Team Flare",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/106/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/106/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/106/high",
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
			fr: "Prenez un Pokémon de base dans la pile de défausse de votre adversaire et placez-le sur son Banc.",
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
