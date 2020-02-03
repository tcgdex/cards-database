import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-75",
	localId: 75,

	// Card informations
	name: {
		en: "Hex Maniac",
		fr: "Mystimaniac",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/75/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/75/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/75/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/75/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Jusqu'à la fin du prochain tour de votre adversaire, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de talent. (Cela comprend les cartes qui sont en jeu pendant ce tour.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

