import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-83",
	localId: 83,

	// Card informations
	name: {
		en: "Flash Energy",
		fr: "Énergie Flash",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/83/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/83/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/83/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/83/high.png",
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
			fr: "Cette carte ne peut être attachée qu'à un Pokémon Lightning. Cette carte ne fournit de l'Énergie Lightning que pendant qu'elle est attachée à un Pokémon Lightning.\n\nLe Pokémon Lightning auquel cette carte est attachée n'a pas de Faiblesse.\n\n(Si cette carte est attachée à autre chose qu'un Pokémon Lightning, défaussez cette carte.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

