import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-132",
	localId: 132,

	// Card informations
	name: {
		en: "Energy Pickup",
		fr: "Collecte d'Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/132/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/132/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/132/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/132/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à 1 de vos Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

