import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-94",
	localId: 94,

	// Card informations
	name: {
		en: "Rocky Helmet",
		fr: "Casque Brut",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/94/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/94/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
		Tag.TOOL,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si le Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
