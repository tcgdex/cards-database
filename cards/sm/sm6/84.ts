import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-84",
	localId: 84,

	// Card informations
	name: {
		en: "Flabébé",
		fr: "Flabébé",
	},

	hp: 40,

	type: [
		Type.FAIRY,
	],

	dexId: 669,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/84/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/84/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Secret Blessings",
			fr: "Bénédictions Secrètes",
		},
		text: {
			en: "Shuffle 3 in any combination of Pokémon and basic Energy cards from your discard pile into your deck.",
			fr: "Choisissez une combinaison de 3 Pokémon et Énergies de base dans votre pile de défausse et mélangez-les avec votre deck.",
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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
