import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-152",
	localId: 152,

	// Card informations
	name: {
		en: "Rainbow Energy",
		fr: "Énergie Multicolore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/152/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/152/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/152/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/152/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l'Énergie Colorless. Pendant que cette carte est en jeu, elle fournit n'importe quel type d'Énergie mais ne fournit qu'une Énergie à la fois. Lorsque vous attachez cette carte de votre main à l'un de vos Pokémon, placez un marqueur de dégâts sur le Pokémon auquel l'Énergie a été attachée.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
