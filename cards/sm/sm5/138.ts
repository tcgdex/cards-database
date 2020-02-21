import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-138",
	localId: 138,

	// Card informations
	name: {
		en: "Unit Energy LightningPsychicMetal",
		fr: "Énergie Unitaire LightningPsychicMetal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/138/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/138/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/138/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/138/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l’Énergie Colorless. \n\nLorsque cette carte est attachée à un Pokémon, elle fournit de l’Énergie Lightning, Psychic ou Metal mais ne fournit qu’une Énergie à la fois.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
