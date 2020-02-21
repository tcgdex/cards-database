import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-129",
	localId: 129,

	// Card informations
	name: {
		en: "Team Flare Grunt",
		fr: "Sbire de la Team Flare",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/129/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/129/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/129/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/129/high",
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
			fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
