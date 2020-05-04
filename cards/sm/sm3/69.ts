import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-69",
	localId: 69,

	// Card informations
	name: {
		en: "Solrock",
		fr: "Solaroc",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 338,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/69/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/69/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Draw",
			fr: "Double Pioche",
		},
		text: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
		},
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Solar Heat",
			fr: "Chaleur Solaire",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 20 more damage.",
			fr: "S’il y a une carte Stade en jeu, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
