import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-234",
	localId: 234,

	// Card informations
	name: {
		en: "Grimsley",
		fr: "Pieris",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/234/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/234/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/234/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/234/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 36,
		name: "kodama"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Déplacez jusqu’à 3 marqueurs de dégâts de l’un des Pokémon de votre adversaire vers un autre de ses Pokémon.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
