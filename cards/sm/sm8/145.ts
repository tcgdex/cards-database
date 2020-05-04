import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-145",
	localId: 145,

	// Card informations
	name: {
		en: "Cutiefly",
		fr: "Bombydou",
	},

	hp: 30,

	type: [
		Type.FAIRY,
	],

	dexId: 742,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/145/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/145/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/145/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/145/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sweet Scent",
			fr: "Doux Parfum",
		},
		text: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			fr: "Soignez 30 dégâts à l’un de vos Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
