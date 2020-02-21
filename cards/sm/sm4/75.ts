import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-75",
	localId: 75,

	// Card informations
	name: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 782,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/75/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/75/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d’Boule",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.FIGHTING
		],
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
