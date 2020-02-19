import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-95",
	localId: 95,

	// Card informations
	name: {
		en: "Protection Cube",
		fr: "Cube Protecteur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/95/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/95/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/95/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/95/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Évitez tous les dégâts infligés au Pokémon auquel cette carte est attachée par les attaques qu'il utilise.",
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

