import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-66",
	localId: 66,

	// Card informations
	name: {
		en: "Tentacruel",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 73,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/66/high",
		},
	},

	evolveFrom: {
		en: "Tentacool",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Supersonic",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Jellyfish Sting",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
