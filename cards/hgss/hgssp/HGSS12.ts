import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgssp-HGSS12",
	localId: "HGSS12",

	// Card informations
	name: {
		en: "Cleffa",
	},

	hp: 30,

	type: [
		Type.COLORLESS,
	],

	dexId: 173,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 48,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sweet Sleeping Face",
		},
		text: {
			en: "As long as Cleffa is Asleep, prevent all damage done to Cleffa by attacks.",
		}
	}],

	attacks: [{
		name: {
			en: "Eeeeeeek",
		},
		text: {
			en: "Shuffle your hand into your deck, then draw 6 cards. Cleffa is now Asleep.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HGSS Black Star Promos",
		code: "hgssp"
	}
}

export default card
