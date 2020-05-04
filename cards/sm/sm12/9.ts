import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-9",
	localId: 9,

	// Card informations
	name: {
		en: "Heracross",
		fr: "Scarhino",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 214,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/9/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/9/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Satoshi Shirai",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Lunge Out",
			fr: "Allonger",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Riled Horn",
			fr: "Corne Irritée",
		},
		text: {
			en: "If your opponent has any TAG TEAM Pokémon in play, this attack does 70 more damage.",
			fr: "Si votre adversaire a au moins un Pokémon ESCOUADE en jeu, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
