import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY99",
	localId: "XY99",

	// Card informations
	name: {
		en: "Aerodactyl Spirit Link",
		fr: "Lien Spirituel Ptéra",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY99/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY99/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Ptéra-EX.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
