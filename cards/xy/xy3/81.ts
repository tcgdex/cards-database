import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-81",
	localId: 81,

	// Card informations
	name: {
		en: "Slakoth",
		fr: "Parecool",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 287,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/81/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/81/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Big Yawn",
			fr: "Gros Bâillement",
		},
		text: {
			en: "Both Active Pokémon are now Asleep.",
			fr: "Les deux Pokémon Actifs sont maintenant Endormis.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
