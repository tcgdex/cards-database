import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-216",
	localId: 216,

	// Card informations
	name: {
		en: "Quick Ball",
		fr: "Rapide Ball",
	},







	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 64,
		name: "sadaji"
	},



	effect: {
		en: "You can play this card only if you discard another card from your hand.\n\nSearch your deck for a Basic Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Vous ne pouvez jouer cette carte que si vous défaussez une autre carte de votre main.\n\nCherchez dans votre deck un Pokémon de base, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
	},







	rarity: Rarity.RareRainbow,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
