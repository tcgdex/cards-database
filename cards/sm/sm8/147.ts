import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-147",
	localId: 147,

	// Card informations
	name: {
		en: "Morelull",
		fr: "Spododo",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 755,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/147/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/147/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/147/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/147/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "You Iribi",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Perplex",
			fr: "Affolement",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
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

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
