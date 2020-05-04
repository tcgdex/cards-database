import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-9",
	localId: 9,

	// Card informations
	name: {
		en: "Luxray GL",
		fr: "Luxray  Niv. 48",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 405,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/9/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/9/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Trash Bolt",
			fr: "Éclair saccageant",
		},
		text: {
			en: "Discard an Energy card from your hand. (If you can't discard a card from your hand, this attack does nothing.)",
			fr: "Défaussez une carte Énergie de votre main. (Si vous ne pouvez pas défausser de carte de votre main, cette attaque est sans effet).",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
