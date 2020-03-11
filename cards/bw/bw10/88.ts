import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-88",
	localId: 88,

	// Card informations
	name: {
		en: "Silver Bangle",
		fr: "Bracelet d'Argent",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/88/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/88/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Les attaques du Pokémon auquel cette carte est attachée (excepté les Pokémon-EX) infligent 30 dégâts supplémentaires aux Pokémon-EX Actifs (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
