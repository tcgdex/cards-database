import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-108",
	localId: 108,

	// Card informations
	name: {
		en: "Rock Guard",
		fr: "Garde Roche",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/108/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/108/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/108/high",
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
			fr: "Si le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si le Pokémon est mis K.O.), placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
		},
	}],







	rarity: Rarity.RareACE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
