import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-113",
	localId: 113,

	// Card informations
	name: {
		en: "Here Comes Team Rocket!",
		fr: "Et voilà la Team Rocket !",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/113/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/113/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/113/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur tourne toutes ses cartes Récompense face découverte. (Ces cartes Récompense restent face découverte pour le reste de la partie.)",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
