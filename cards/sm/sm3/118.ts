import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-118",
	localId: 118,

	// Card informations
	name: {
		en: "Mount Lanakila",
		fr: "Mont Lanakila",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/118/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/118/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/118/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le Coût de Retraite de chaque Pokémon de base en jeu (les vôtres et ceux de votre adversaire) est augmenté de Colorless.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
