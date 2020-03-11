import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-114",
	localId: 114,

	// Card informations
	name: {
		en: "Sunkern",
		fr: "Tournegrin",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 191,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/114/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/114/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sun Soak",
			fr: "Trempe-soleil",
		},
		text: {
			en: "Flip a coin. If heads, remove all damage counters from Sunkern, search your deck for an Evolution card that evolves from Sunkern, and put it onto Sunkern. (This counts as evolving Sunkern.) Shuffle your deck afterward.",
			fr: "Lancez une pièce. Si c'est face, retirez à Tournegrin tous ses marqueurs de dégât, cherchez dans votre deck une carte Évolution qui évolue de Tournegrin et placez-la sur Tournegrin. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
