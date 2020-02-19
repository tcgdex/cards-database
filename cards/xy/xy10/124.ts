import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-124",
	localId: 124,

	// Card informations
	name: {
		en: "Team Rocket's Handiwork",
		fr: "Méfaits de la Team Rocket",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/124/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/124/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/124/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/124/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez 2 cartes du dessus du deck de votre adversaire.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

