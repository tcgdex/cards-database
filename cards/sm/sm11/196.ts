import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-196",
	localId: 196,

	// Card informations
	name: {
		en: "Giant Bomb",
		fr: "Bombe Géante",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/196/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/196/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/196/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/196/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Studio Bora Inc.",



	attacks: [{
		name: {},
		text: {
			fr: "Si cette carte est attachée à l’un de vos Pokémon, défaussez-la à la fin du tour de votre adversaire.\n\nSi le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu’il subit 180 dégâts ou plus d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 10 marqueurs de dégâts sur le Pokémon Attaquant.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
