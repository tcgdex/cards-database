import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-91",
	localId: 91,

	// Card informations
	name: {
		en: "Quilava",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 156,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/91/high",
		},
	},

	evolveFrom: {
		en: "Cyndaquil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 135,
		name: "Asuka Iwashita"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Super Singe",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
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
