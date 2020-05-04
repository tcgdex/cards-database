import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-82",
	localId: 82,

	// Card informations
	name: {
		en: "Magneton",
		fr: "Magnéton",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 82,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/82/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/82/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/82/high",
		},
	},

	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Zap Cannon",
			fr: "Élecanon",
		},
		text: {
			en: "This Pokémon can't use Zap Cannon during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
