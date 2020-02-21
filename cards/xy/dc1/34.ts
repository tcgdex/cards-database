import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-34",
	localId: 34,

	// Card informations
	name: {
		en: "Double Magma Energy",
		fr: "Double Énergie Magma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/34/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/34/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/34/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte ne peut être attachée qu'à un Pokémon de la Team Magma. Défaussez cette carte à la fin du tour pendant lequel vous l'avez attachée.\n\nCette carte ne fournit de l'Énergie FightingFighting que pendant qu'elle est attachée à un Pokémon de la Team Magma.\n\n(Si cette carte est attachée à autre chose qu'un Pokémon de la Team Magma, défaussez cette carte.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
