import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-44",
	localId: 44,

	// Card informations
	name: {
		en: "Poliwhirl",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 61,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/44/high",
		},
	},

	evolveFrom: {
		en: "Poliwag",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Belly Drum",
		},
		text: {
			en: "Put 3 damage counters on Poliwhirl. If this doesn't knock out Poliwhirl, search your deck for up to 2 Basic Energy cards and attach them to Poliwhirl. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Gun",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each W Energy attached to Poliwhirl but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
