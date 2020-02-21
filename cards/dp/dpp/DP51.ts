import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP51",
	localId: "DP51",

	// Card informations
	name: {
		en: "Cresselia",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 488,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},

	abilities: [{
		id: 868,
		type: AbilityType.POKEBODY,
		name: {
			en: "Lunar Aura",
		},
		text: {
			en: "If you have Darkrai in play, remove 1 damage counter from Cresselia between turns.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Lunar Flight",
		},
		text: {
			en: "Does 80 damage minus 10 damage for each damage counter on Cresselia.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
