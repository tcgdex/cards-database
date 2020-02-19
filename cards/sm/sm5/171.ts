import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-171",
	localId: 171,

	// Card informations
	name: {
		en: "Unit Energy LightningPsychicMetal",
		fr: "Énergie Unitaire LightningPsychicMetal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/171/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/171/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/171/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/171/high.png",
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







	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

