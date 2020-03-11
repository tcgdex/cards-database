import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-89",
	localId: 89,

	// Card informations
	name: {
		en: "Silver Mirror",
		fr: "Miroir d'Argent",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/89/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/89/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/89/high",
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
			fr: "Évitez tous les effets d'attaques (y compris les dégâts) infligés au Pokémon auquel cette carte est attachée (excepté les Pokémon-EX) par les Pokémon de la Team Plasma de votre adversaire.",
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
