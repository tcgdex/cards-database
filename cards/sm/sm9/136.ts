import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-136",
	localId: 136,

	// Card informations
	name: {
		en: "Buff Padding",
		fr: "Protection Musclée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/136/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/136/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/136/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/136/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée a un Coût de Retraite d’exactement 4, il reçoit +50 PV.",
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
