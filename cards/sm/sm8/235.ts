import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-235",
	localId: 235,

	// Card informations
	name: {
		en: "Spell Tag",
		fr: "Rune Sort",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/235/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/235/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/235/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/235/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lorsque le Pokémon Psychic auquel cette carte est attachée est mis K.O. par les dégâts d’une attaque de votre adversaire, placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

