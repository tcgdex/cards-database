import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-106",
	localId: 106,

	// Card informations
	name: {
		en: "Rocket's Zapdos ex",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 145,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 318,
		type: AbilityType.POKEBODY,
		name: {
			en: "Darkness Guard",
		},
		text: {
			en: "As long as Rocket's Zapdos ex has any Darkness Energy attached to it, damage done to Rocket's Zapdos ex by an opponent's attack is reduced by 10 (after applying Weakness and Resistance).\"",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Plasma",
		},
		text: {
			en: "Search your discard pile for a Lightning Energy card and attach it to Rocket's Zapdos ex.\"",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Raging Thunder",
		},
		text: {
			en: "This attack does 30 damage to 1 of your Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
