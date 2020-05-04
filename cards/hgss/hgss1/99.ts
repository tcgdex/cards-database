import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-99",
	localId: 99,

	// Card informations
	name: {
		en: "Pokémon Reversal",
		fr: "Inversion de Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/99/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/99/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Wataru Kawahara",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c’est face, choisissez un Pokémon du Banc de votre adversaire et échangez-le avec son Pokémon actif.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
