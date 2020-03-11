import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-23",
	localId: 23,

	// Card informations
	name: {
		en: "Simisear",
		fr: "Flamoutan",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 514,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/23/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/23/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/23/high",
		},
	},

	evolveFrom: {
		en: "Pansear",
		fr: "Flamajou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare Recharge",
			fr: "Flambée Rechargée",
		},
		text: {
			en: "Attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie Fire de votre pile de défausse à l’un de vos Pokémon de Banc.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
