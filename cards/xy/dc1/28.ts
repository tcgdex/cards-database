import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-28",
	localId: 28,

	// Card informations
	name: {
		en: "Team Aqua's Secret Base",
		fr: "Base Secrète de la Team Aqua",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/28/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/28/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le Coût de Retraite de chaque Pokémon en jeu (à part les Pokémon de la Team Aqua) est augmenté de Colorless.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
