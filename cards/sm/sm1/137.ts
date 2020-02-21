import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-137",
	localId: 137,

	// Card informations
	name: {
		en: "Rainbow Energy",
		fr: "Énergie Multicolore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/137/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/137/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/137/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/137/high",
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
			fr: "Cette carte fournit de l’Énergie Colorless. Tant que cette carte est en jeu, elle fournit n’importe quel type d’Énergie mais ne fournit qu’une Énergie à la fois. Lorsque vous attachez cette carte de votre main à l’un de vos Pokémon, placez 1 marqueur de dégâts sur ce Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
