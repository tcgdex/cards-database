import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-179",
	localId: 179,

	// Card informations
	name: {
		en: "Quick Ball",
		fr: "Rapide Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/179/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/179/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 64,
		name: "sadaji"
	},



	attacks: [{
		name: {},
		text: {
			en: "You can play this card only if you discard another card from your hand.\n\nSearch your deck for a Basic Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez une autre carte de votre main.\n\nCherchez dans votre deck un Pokémon de base, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
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
