import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-11",
	localId: 11,

	// Card informations
	name: {
		en: "Swalot",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 317,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/11/high",
		},
	},

	evolveFrom: {
		en: "Gulpin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pick and Choose",
		},
		text: {
			en: "Choose either Burned or Poisoned, and either Asleep or Confused. The Defending Pokémon is now affected by both Special Conditions.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reactive Poison",
		},
		text: {
			en: "Does 50 damage plus 20 more damage for each Special Condition affecting the Defending Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
