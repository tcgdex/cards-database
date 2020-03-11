import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-158",
	localId: 158,

	// Card informations
	name: {
		en: "Maxie's Hidden Ball Trick",
		fr: "Ruse de Max",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/158/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/158/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/158/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/158/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		name: {},
		text: {
			fr: "Vous pouvez jouer cette carte seulement lorsque c'est la dernière carte dans votre main.\n\nPlacez un Pokémon Fighting de votre pile de défausse sur votre Banc. Ensuite, piochez 5 cartes.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
