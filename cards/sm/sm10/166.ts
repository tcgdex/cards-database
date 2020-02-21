import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-166",
	localId: 166,

	// Card informations
	name: {
		en: "Devolution Spray Z",
		fr: "Spray Dés-Évoluant Z",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/166/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/166/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/166/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/166/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Faites dés-évoluer l’un de vos Pokémon évolués en mélangeant le nombre voulu de cartes Évolution placées dessus avec votre deck. (Ce Pokémon ne peut pas évoluer pendant ce tour.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
