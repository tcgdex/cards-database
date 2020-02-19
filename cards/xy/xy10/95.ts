import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-95",
	localId: 95,

	// Card informations
	name: {
		en: "Devolution Spray",
		fr: "Spray Dés-Évoluant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/95/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/95/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/95/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/95/high.png",
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
			fr: "Faites dés-évoluer l'un de vos Pokémon évolués et mettez sa carte Évolution de plus haut Niveau dans votre main. (Le Pokémon choisi ne peut pas évoluer pendant ce tour.)",
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

