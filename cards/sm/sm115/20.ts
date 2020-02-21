import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-20",
	localId: 20,

	// Card informations
	name: {
		en: "Raichu-GX",
		fr: "Raichu-GX",
	},

	hp: 210,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/20/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/20/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/20/high",
		},
	},

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
		},
		damage: 120
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Spark Ball-GX",
			fr: "Boule Étincelles-GX",
		},
		text: {
			en: "(You can't use more than 1 GX attack in a game.)",
			fr: "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
