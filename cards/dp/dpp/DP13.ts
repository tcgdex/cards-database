import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP13",
	localId: "DP13",

	// Card informations
	name: {
		en: "Buizel",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 418,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Splash About",
		},
		text: {
			en: "If Buizel has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],





	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
