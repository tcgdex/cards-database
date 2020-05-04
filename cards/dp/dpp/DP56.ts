import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP56",
	localId: "DP56",

	// Card informations
	name: {
		en: "Arceus",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 493,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 180,
		type: AbilityType.POKEBODY,
		name: {
			en: "Multitype",
		},
		text: {
			en: "Arceus LV.X's type is the same type as its previous Level.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Meteor Blast",
		},
		text: {
			en: "Flip a coin. If tails, this attack's base damage is 50 instead of 100.",
		},
		damage: 100
	}],







	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
