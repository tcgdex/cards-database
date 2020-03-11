import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY148",
	localId: "XY148",

	// Card informations
	name: {
		en: "Shaymin-EX",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 492,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY148/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY148/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Kanako Eo",

	abilities: [{
		id: 1252,
		type: AbilityType.TALENT,
		name: {
			en: "Aroma of Gratitude",
		},
		text: {
			en: "Once during your turn (before your attack), you may heal 20 damage from each of your Benched Basic Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Floral Gain",
		},
		text: {
			en: "Heal 20 damage and remove all Special Conditions from this Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
