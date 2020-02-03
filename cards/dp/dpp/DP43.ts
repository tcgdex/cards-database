import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP43",
	localId: "DP43",

	// Card informations
	name: {
		en: "Probopass G",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 476,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP43/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP43/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 84,
		name: "Ryota Saito"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Nose Unit",
		},
		text: {
			en: "This attack does 20 damage to each of your opponent's Pokémon that has any Poké-Bodies. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Loud Snort",
		},
		text: {
			en: "Probopass 's Retreat Cost is 0 until the end of your next turn.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
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

