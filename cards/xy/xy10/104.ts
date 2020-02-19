import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-104",
	localId: 104,

	// Card informations
	name: {
		en: "Mega Catcher",
		fr: "Attrape Méga",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/104/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/104/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/104/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/104/high.png",
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
			fr: "Échangez l'un des Pokémon Méga-Évolution du Banc de votre adversaire avec son Pokémon Actif.",
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

