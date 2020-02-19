import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-113",
	localId: 113,

	// Card informations
	name: {
		en: "Pokémon Ranger",
		fr: "Pokémon Ranger",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/113/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/113/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/113/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/113/high.png",
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
			fr: "Supprimez tous les effets des attaques sur chaque joueur et ses Pokémon.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

