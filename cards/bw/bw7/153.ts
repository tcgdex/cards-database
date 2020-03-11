import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-153",
	localId: 153,

	// Card informations
	name: {
		en: "Rocky Helmet",
		fr: "Casque Brut",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/153/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/153/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/153/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/153/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si le Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
