import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw8/120/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/120/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/120/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/120/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur échange son Pokémon Actif avec 1 de ses Pokémon de Banc. (Votre adversaire échange en premier. Si un joueur n'a pas de Pokémon de Banc, il n'échange pas son Pokémon.)",
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

