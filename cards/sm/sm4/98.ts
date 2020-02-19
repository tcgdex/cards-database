import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-98",
	localId: 98,

	// Card informations
	name: {
		en: "Psychic Memory",
		fr: "ROM Psy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/98/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/98/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/98/high.png",
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
			fr: "Le Silvallié-GX auquel cette carte est attachée est un Pokémon Psychic.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

