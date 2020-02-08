import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-171",
	localId: 171,

	// Card informations
	name: {
		en: "Ordinary Rod",
		fr: "Canne Ordinaire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/171/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/171/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/171/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/171/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 39,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			en: "Choose 1 or both:\n\n• Shuffle up to 2 Pokémon from your discard pile into your deck.\n\n• Shuffle up to 2 basic Energy cards from your discard pile into your deck.",
			fr: "Choisissez l’une de ces options ou les deux :\n\n• Mélangez avec votre deck jusqu’à 2 Pokémon de votre pile de défausse.\n\n• Mélangez avec votre deck jusqu’à 2 cartes Énergie de base de votre pile de défausse.",
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
