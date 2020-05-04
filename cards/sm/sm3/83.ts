import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-83",
	localId: 83,

	// Card informations
	name: {
		en: "Alolan Grimer",
		fr: "Tadmorv d’Alola",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 88,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/83/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/83/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		name: {
			en: "Division",
			fr: "Division",
		},
		text: {
			en: "Search your deck for Alolan Grimer and put it onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez Tadmorv d’Alola dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slippery Sludge",
			fr: "Gadoue Glissante",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
