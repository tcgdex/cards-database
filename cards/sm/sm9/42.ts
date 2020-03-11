import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-42",
	localId: 42,

	// Card informations
	name: {
		en: "Flaaffy",
		fr: "Lainergie",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 180,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/42/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/42/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/42/high",
		},
	},

	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shibuzoh.",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Electric Punch",
			fr: "Poing Électrique",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Shock Bolt",
			fr: "Choc’Éclair",
		},
		text: {
			en: "Discard all Lightning Energy from this Pokémon.",
			fr: "Défaussez toute l’Énergie Lightning de ce Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
