import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-151",
	localId: 151,

	// Card informations
	name: {
		en: "Rainbow Energy",
		fr: "Énergie Multicolore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/151/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/151/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/151/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/151/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l’Énergie Colorless. Tant que cette carte est en jeu, elle fournit n’importe quel type d’Énergie mais ne fournit qu’une Énergie à la fois. Lorsque vous attachez cette carte de votre main à l’un de vos Pokémon, placez un marqueur de dégâts sur ce Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
