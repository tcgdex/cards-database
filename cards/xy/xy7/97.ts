import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-97",
	localId: 97,

	// Card informations
	name: {
		en: "Primal Groudon-EX",
		fr: "Primo-Groudon-EX",
	},

	hp: 240,

	type: [
		Type.FIGHTING,
	],

	dexId: 383,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/97/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/97/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/97/high",
		},
	},

	evolveFrom: {
		en: "Groudon-EX",
		fr: "Groudon-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Gaia Volcano",
			fr: "Max Θ",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 100 more damage. Discard that Stadium card.",
		},
		damage: 100
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			fr: "Volcan de Gaïa",
		},
		text: {
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 100 dégâts supplémentaires. Défaussez la carte Stade.",
		},
		damage: "100+"
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
