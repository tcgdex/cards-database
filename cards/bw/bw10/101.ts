import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-101",
	localId: 101,

	// Card informations
	name: {
		en: "Iris",
		fr: "Iris",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/101/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/101/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		name: {},
		text: {
			fr: "Pendant ce tour, les attaques de vos Pokémon infligent 10 dégâts supplémentaires aux Pokémon Actifs pour chaque carte Récompense que votre adversaire a récupérée (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
