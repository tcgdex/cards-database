import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-151",
	localId: 151,

	// Card informations
	name: {
		en: "Burning Energy",
		fr: "Énergie Combustion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/151/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/151/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/151/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/151/high.png",
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
			fr: "Cette carte ne peut être attachée qu'à un Pokémon Fire. Cette carte ne fournit de l'Énergie Fire que pendant qu'elle est attachée à un Pokémon Fire.\n\nSi cette carte est défaussée par une attaque du Pokémon Fire auquel cette carte est attachée, attachez cette carte de votre pile de défausse au Pokémon après votre attaque.\n\n(Si cette carte est attachée à autre chose qu'un Pokémon Fire, défaussez cette carte.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

