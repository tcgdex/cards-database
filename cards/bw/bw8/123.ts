import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw8/123/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/123/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/123/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/123/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



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

