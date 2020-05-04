import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-115",
	localId: 115,

	// Card informations
	name: {
		en: "Larvitar",
		fr: "Embrylex",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 246,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/115/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/115/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/115/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "SATOSHI NAKAI",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Second Strike",
			fr: "Deuxième Coup",
		},
		text: {
			en: "If your opponent's Active Pokémon already has 3 or more damage counters on it, this attack does 70 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà 3 marqueurs de dégâts ou plus, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
