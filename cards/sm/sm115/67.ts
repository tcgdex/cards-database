import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-67",
	localId: 67,

	// Card informations
	name: {
		en: "Giovanni's Exile",
		fr: "Exil de Giovanni",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/67/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/67/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez jusqu’à 2 de vos Pokémon de Banc qui n’ont pas de marqueurs de dégâts, ainsi que toutes les cartes qui leur sont attachées.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
