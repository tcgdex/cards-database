import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-59",
	localId: 59,

	// Card informations
	name: {
		en: "Ducklett",
		fr: "Couaneton",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 580,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/59/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/59/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yumi",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aerial Ace",
			fr: "Aéropique",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
