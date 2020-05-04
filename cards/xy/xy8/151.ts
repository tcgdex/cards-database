import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy8/151/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/151/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/151/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/151/high",
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
			fr: "Cette carte ne peut être attachée qu'à un Pokémon Fire. Cette carte ne fournit de l'Énergie Fire que pendant qu'elle est attachée à un Pokémon Fire.\n\nSi cette carte est défaussée par une attaque du Pokémon Fire auquel cette carte est attachée, attachez cette carte de votre pile de défausse au Pokémon après votre attaque.\n\n(Si cette carte est attachée à autre chose qu'un Pokémon Fire, défaussez cette carte.)",
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
