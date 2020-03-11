import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-3",
	localId: 3,

	// Card informations
	name: {
		en: "Dewgong",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 87,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/3/high",
		},
	},

	evolveFrom: {
		en: "Seel",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Toshinao Aoki",

	abilities: [{
		id: 148,
		type: AbilityType.POKEBODY,
		name: {
			en: "Safeguard",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Dewgong by your opponent's Pokémon-ex.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Cold Breath",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aurora Beam",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
