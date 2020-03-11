import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-89",
	localId: 89,

	// Card informations
	name: {
		en: "Inkay",
		fr: "Sepiatop",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 686,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/89/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/89/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "OOYAMA",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Constrict",
			fr: "Constriction",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
