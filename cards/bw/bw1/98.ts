import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-98",
	localId: 98,

	// Card informations
	name: {
		en: "Pokédex",
		fr: "Pokédex",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/98/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/98/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.ITEM,
	],

	illustrator: "Noriko Hotta",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 5 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l’ordre de votre choix.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
