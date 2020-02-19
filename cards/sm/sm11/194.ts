import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-194",
	localId: 194,

	// Card informations
	name: {
		en: "Ear-Ringing Bell",
		fr: "Cloche Sonnante",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/194/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/194/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/194/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/194/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si le Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Confus.",
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

