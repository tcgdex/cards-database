import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-77",
	localId: 77,

	// Card informations
	name: {
		en: "Switch Raft",
		fr: "Bouée d’Échange",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/77/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/77/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Échangez votre Pokémon Actif Water avec l’un de vos Pokémon de Banc. Dans ce cas, soignez 30 dégâts au Pokémon que vous avez déplacé vers votre Banc.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
