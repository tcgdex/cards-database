import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-8",
	localId: 8,

	// Card informations
	name: {
		en: "Shelmet",
		fr: "Escargaume",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 616,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/8/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/8/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/8/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/8/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 35,
		name: "OOYAMA"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Absorb",
			fr: "Vol-Vie",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

