import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/swsh/swsh1/171/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/171/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



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
