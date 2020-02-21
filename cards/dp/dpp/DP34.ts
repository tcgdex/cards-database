import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP34",
	localId: "DP34",

	// Card informations
	name: {
		en: "Drifblim",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 426,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP34/high",
		},
	},

	evolveFrom: {
		en: "Drifloon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wind Wave",
		},
		text: {
			en: "Search your discard pile for up to 5 in any combination of Pokémon and Supporter cards. Show them to your opponent and shuffle them into your deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Explosive Smoke",
		},
		text: {
			en: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
