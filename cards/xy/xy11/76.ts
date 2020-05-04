import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-76",
	localId: 76,

	// Card informations
	name: {
		en: "Marill",
		fr: "Marill",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 183,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/76/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/76/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shibuzoh.",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Bubble Drain",
			fr: "Vide Bulle",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
