import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-170",
	localId: 170,

	// Card informations
	name: {
		en: "Metal Saucer",
		fr: "Écusson Métal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/170/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/170/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 68,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			en: "Attach a Metal Energy card from your discard pile to 1 of your Benched Metal Pokémon.",
			fr: "Attachez une carte Énergie Metal de votre pile de défausse à l’un de vos Pokémon Metal de Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
