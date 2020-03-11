import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-130",
	localId: 130,

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
			en: "https://assets.tcgdex.net/en/sm/sm12/130/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/130/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/130/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/130/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sekio",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Melt",
			fr: "Dissolution",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Nasty Goo",
			fr: "Glu Fétide",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
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

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
