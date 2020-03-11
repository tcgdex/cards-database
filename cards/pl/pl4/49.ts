import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-49",
	localId: 49,

	// Card informations
	name: {
		en: "Wormadam Plant Cloak",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 413,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/49/high",
		},
	},

	evolveFrom: {
		en: "Burmy Plant Cloak",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Magical Needle",
		},
		text: {
			en: "Remove 2 damage counters from 1 of your Benched Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cloak Scale",
		},
		text: {
			en: "If you have Wormadam Sandy Cloak in play, the Defending Pokémon is now Burned, Confused, and Poisoned.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
