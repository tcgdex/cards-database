import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-44",
	localId: 44,

	// Card informations
	name: {
		en: "Starmie",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/44/high",
		},
	},

	evolveFrom: {
		en: "Staryu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Umemoto",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Gun",
		},
		text: {
			en: "This attack does 10 damage plus 20 more damage for each Energy attached to Starmie but not used to pay for this attack's energy cost. You can't add more than 40 damage in this way.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Core Blast",
		},
		text: {
			en: "This attack does 30 damage plus 20 more damage for each Special Energy card attached to the Defending Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
