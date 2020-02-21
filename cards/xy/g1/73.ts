import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-73",
	localId: 73,

	// Card informations
	name: {
		en: "Team Flare Grunt",
		fr: "Sbire de la Team Flare",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/73/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/73/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 86,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
