import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-78",
	localId: 78,

	// Card informations
	name: {
		en: "Gloom",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 44,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/78/high",
		},
	},

	evolveFrom: {
		en: "Oddish",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 128,
		name: "Yuichi Sawayama"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Foul Odor",
		},
		text: {
			en: "Both the Defending Pokémon and Gloom are now Confused (after doing damage).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
