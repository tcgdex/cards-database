import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-153",
	localId: 153,

	// Card informations
	name: {
		en: "Rocky Helmet",
		fr: "Casque Brut",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/153/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/153/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/153/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/153/high",
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
			fr: "Si le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si le Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
