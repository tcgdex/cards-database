import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-143",
	localId: 143,

	// Card informations
	name: {
		en: "Grass Memory",
		fr: "ROM Plante",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/143/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/143/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/143/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/143/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le Silvallié-GX auquel cette carte est attachée est un Pokémon Grass.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
