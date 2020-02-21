import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-96",
	localId: 96,

	// Card informations
	name: {
		en: "PlusPower",
		fr: "PlusPower",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/96/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/96/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Pendant ce tour, les attaques de votre Pokémon infligent 10 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
