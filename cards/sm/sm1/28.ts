import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-28",
	localId: 28,

	// Card informations
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 54,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/28/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/28/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shibuzoh.",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Confusion Wave",
			fr: "Vague de Confusion",
		},
		text: {
			en: "Both Active Pokémon are now Confused.",
			fr: "Les deux Pokémon Actifs sont maintenant Confus.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
