import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-105",
	localId: 105,

	// Card informations
	name: {
		en: "N",
		fr: "N",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/105/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/105/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/105/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur mélange sa main avec son deck. Ensuite, chaque joueur pioche une carte pour chacune des cartes Récompense qu'il lui reste.",
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
