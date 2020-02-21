import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-114",
	localId: 114,

	// Card informations
	name: {
		en: "Escape Rope",
		fr: "Corde Sortie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/114/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/114/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur échange son Pokémon Actif avec l’un de ses Pokémon de Banc. Votre adversaire échange en premier. (Si l’un des joueurs n’a pas de Pokémon de Banc, il n’échange pas de Pokémon).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
