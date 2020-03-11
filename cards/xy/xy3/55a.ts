import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-55",
	localId: 55,

	// Card informations
	name: {
		en: "M Lucario-EX",
	},

	hp: 220,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/55a/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/55a/high",
		},
	},

	evolveFrom: {
		en: "Lucario-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Rising Fist",
		},
		text: {
			en: "Discard an Energy attached to your opponent's Active Pokémon.",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
