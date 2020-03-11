import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-123",
	localId: 123,

	// Card informations
	name: {
		en: "Hypnotoxic Laser",
		fr: "Laser Hypnotoxique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/123/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/123/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/123/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est aussi Endormi.",
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
