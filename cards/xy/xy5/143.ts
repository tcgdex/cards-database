import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-143",
	localId: 143,

	// Card informations
	name: {
		en: "Shield Energy",
		fr: "Énergie Bouclier",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/143/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/143/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/143/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/143/high",
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
			fr: "Cette carte ne peut être attachée qu'à un Pokémon Metal. Cette carte ne fournit de l'Énergie Metal que pendant qu'elle est attachée à un Pokémon Metal.\n\nLes attaques des Pokémon de votre adversaire infligent 10 dégâts de moins au Pokémon Metal auquel cette carte est attachée (avant application de la Faiblesse et de la Résistance).\n\n(Si cette carte est attachée à autre chose qu'un Pokémon Metal, défaussez cette carte.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
