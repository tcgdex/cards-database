import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-97",
	localId: 97,

	// Card informations
	name: {
		en: "Startling Megaphone",
		fr: "Mégaphone Surprise",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/97/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/97/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez toutes les cartes Outil Pokémon attachées à chacun des Pokémon de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
