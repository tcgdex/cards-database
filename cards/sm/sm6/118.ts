import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-118",
	localId: 118,

	// Card informations
	name: {
		en: "Unit Energy FightingDarknessFairy",
		fr: "Énergie Unitaire FightingDarknessFairy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/118/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/118/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/118/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/118/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l’Énergie Colorless. \n\nLorsque cette carte est attachée à un Pokémon, elle fournit de l’Énergie Fighting, Darkness ou Fairy mais ne fournit qu’une Énergie à la fois.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

