import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-162",
	localId: 162,

	// Card informations
	name: {
		en: "Energy Switch",
		fr: "Échange d’Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/162/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/162/low.png",
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
			en: "Move a basic Energy from 1 of your Pokémon to another of your Pokémon.",
			fr: "Déplacez une Énergie de base de l’un de vos Pokémon vers un autre de vos Pokémon.",
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
