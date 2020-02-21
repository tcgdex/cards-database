import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-214",
	localId: 214,

	// Card informations
	name: {
		en: "Metal Saucer",
		fr: "Écusson Métal",
	},







	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 68,
		name: "Toyste Beach"
	},


	effect: {
		en: "Attach a Metal Energy card from your discard pile to 1 of your Benched Metal Pokémon.",
		fr: "Attachez une carte Énergie Metal de votre pile de défausse à l’un de vos Pokémon Metal de Banc.",
	},







	rarity: Rarity.RareRainbow,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
