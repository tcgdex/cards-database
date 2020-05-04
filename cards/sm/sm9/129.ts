import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-129",
	localId: 129,

	// Card informations
	name: {
		en: "Tauros",
		fr: "Tauros",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 128,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/129/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/129/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/129/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/129/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kodama",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Raging Herd",
			fr: "Troupeau Enragé",
		},
		text: {
			en: "This attack does 10 more damage for each damage counter on all of your Tauros and Tauros-GX.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur vos Tauros et Tauros-GX.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
