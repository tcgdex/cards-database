import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-100",
	localId: 100,

	// Card informations
	name: {
		en: "Rocket's Moltres ex",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 146,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 306,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dark Lift",
		},
		text: {
			en: "If Rocket's Moltres ex has any Darkness Energy attached to it, the Retreat Cost for Rocket's Moltres ex is 0.\"",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Dance",
		},
		text: {
			en: "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon.\"",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
