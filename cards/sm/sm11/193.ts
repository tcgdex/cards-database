import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-193",
	localId: 193,

	// Card informations
	name: {
		en: "Dark City",
		fr: "Sombreville",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/193/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/193/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/193/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/193/high",
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
			fr: "Les Pokémon Darkness de base en jeu (les vôtres et ceux de votre adversaire) n’ont pas de Coût de Retraite.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
