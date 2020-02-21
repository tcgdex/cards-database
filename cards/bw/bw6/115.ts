import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-115",
	localId: 115,

	// Card informations
	name: {
		en: "Rescue Scarf",
		fr: "Foulard de Sauvetage",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/115/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/115/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/115/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée est mis K.O. par les dégâts d'une attaque, placez-le dans votre main. (Défaussez toutes les cartes attachées au Pokémon mis K.O.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
