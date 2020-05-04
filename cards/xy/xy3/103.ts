import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-103",
	localId: 103,

	// Card informations
	name: {
		en: "Herbal Energy",
		fr: "Phyto-Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/103/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/103/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/103/high",
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
			fr: "Cette carte ne peut être attachée qu'à un Pokémon Grass. Cette carte ne fournit de l'Énergie Grass que pendant qu'elle est attachée à un Pokémon Grass.\n\nLorsque vous attachez cette carte de votre main à l'un de vos Pokémon Grass, soignez 30 dégâts au Pokémon. \n\n(Si cette carte est attachée à autre chose qu'un Pokémon Grass, défaussez cette carte.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
