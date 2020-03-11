import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-79",
	localId: 79,

	// Card informations
	name: {
		en: "Raikou",
		fr: "Raikou",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 243,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/79/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/79/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Lost Voltage",
			fr: "Tension Perdue",
		},
		text: {
			en: "If you have any Lightning Energy cards in the Lost Zone, this attack does 90 more damage.",
			fr: "Si vous avez au moins une carte Énergie Lightning dans la Zone Perdue, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
