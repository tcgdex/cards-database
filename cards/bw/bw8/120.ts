import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-120",
	localId: 120,

	// Card informations
	name: {
		en: "Escape Rope",
		fr: "Corde Sortie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/120/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/120/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/120/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur échange son Pokémon Actif avec 1 de ses Pokémon de Banc. (Votre adversaire échange en premier. Si un joueur n'a pas de Pokémon de Banc, il n'échange pas son Pokémon.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
