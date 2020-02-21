import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-131",
	localId: 131,

	// Card informations
	name: {
		en: "Rainbow Energy",
		fr: "Énergie Multicolore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/131/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/131/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/131/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/131/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l'Énergie Colorless. Pendant que cette carte est en jeu, elle fournit n'importe quel type d'Énergie mais ne fournit qu'une Énergie à la fois. Lorsque vous attachez cette carte de votre main à l'un de vos Pokémon, placez un marqueur de dégâts sur le Pokémon auquel l'Énergie a été attachée.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
