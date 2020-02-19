import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-127",
	localId: 127,

	// Card informations
	name: {
		en: "Escape Rope",
		fr: "Corde Sortie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/127/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/127/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/127/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/127/high.png",
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
			fr: "Chaque joueur échange son Pokémon Actif avec l'un de ses Pokémon de Banc. (Votre adversaire échange en premier. Si un joueur n'a pas de Pokémon de Banc, il n'échange pas son Pokémon.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

