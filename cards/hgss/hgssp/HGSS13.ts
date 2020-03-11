import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgssp-HGSS13",
	localId: "HGSS13",

	// Card informations
	name: {
		en: "Smoochum",
	},

	hp: 30,

	type: [
		Type.PSYCHIC,
	],

	dexId: 238,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 48,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sweet Sleeping Face",
		},
		text: {
			en: "As long as Smoochum is Asleep, prevent all damage done to Smoochum from attacks.",
		}
	}],

	attacks: [{
		name: {
			en: "Energy Antics",
		},
		text: {
			en: "Move an Energy card attached to 1 of your opponent's Pokémon to another one of your opponent's Pokémon. Smoochum is now Asleep.",
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
