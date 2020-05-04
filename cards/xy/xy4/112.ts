import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-112",
	localId: 112,

	// Card informations
	name: {
		en: "Mystery Energy",
		fr: "Énergie Mystère",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/112/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/112/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/112/high",
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
			fr: "Cette carte ne peut être attachée qu'à un Pokémon Psychic. Elle ne fournit de l'Énergie Psychic que pendant qu'elle est attachée à un Pokémon Psychic. Le Coût de Retraite du Pokémon auquel cette carte est attachée est diminué de ColorlessColorless. (Si cette carte est attachée à autre chose qu'un Pokémon Psychic, défaussez cette carte.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
