import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-163",
	localId: 163,

	// Card informations
	name: {
		en: "Escape Rope",
		fr: "Corde Sortie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/163/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/163/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/163/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/163/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur échange son Pokémon Actif avec l’un de ses Pokémon de Banc. Votre adversaire échange en premier. (Si l’un des joueurs n’a pas de Pokémon de Banc, il n’échange pas de Pokémon).",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
