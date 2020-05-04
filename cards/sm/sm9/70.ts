import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-70",
	localId: 70,

	// Card informations
	name: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 790,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/70/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/70/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/70/high",
		},
	},

	evolveFrom: {
		en: "Cosmog",
		fr: "Cosmog",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nap",
			fr: "Tit’Sieste",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
