import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-93",
	localId: 93,

	// Card informations
	name: {
		en: "Full Heal",
		fr: "Énergie guérisseuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/93/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/93/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 68,
		name: "Takashi Yamaguchi"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Retirez tous les États spéciaux de votre Pokémon actif.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
