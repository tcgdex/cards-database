import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-74",
	localId: 74,

	// Card informations
	name: {
		en: "Brock's Grit",
		fr: "Vaillance de Pierre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/74/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/74/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une combinaison de 6 cartes de Pokémon et d'Énergies de base dans votre pile de défausse et mélangez-les avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
