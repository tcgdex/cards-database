import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-211",
	localId: 211,

	// Card informations
	name: {
		en: "Koga's Trap",
		fr: "Piège de Koga",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/211/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/211/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/211/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/211/high.png",
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
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

