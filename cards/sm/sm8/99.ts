import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-99",
	localId: 99,

	// Card informations
	name: {
		en: "Yamask",
		fr: "Tutafeh",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 562,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/99/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/99/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Haunt",
			fr: "Hanter",
		},
		text: {
			en: "Put 1 damage counter on your opponent's Active Pokémon.",
			fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
