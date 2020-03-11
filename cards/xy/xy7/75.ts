import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy7/75/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/75/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",



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
