import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-126",
	localId: 126,

	// Card informations
	name: {
		en: "Virbank City Gym",
		fr: "Arène d'Ondes-sur-Mer",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/126/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/126/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/126/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Placez 2 marqueurs de dégâts supplémentaires sur les Pokémon Empoisonnés (les vôtres et ceux de votre adversaire) entre chaque tour.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
