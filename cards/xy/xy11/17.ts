import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-17",
	localId: 17,

	// Card informations
	name: {
		en: "Rapidash",
		fr: "Galopa",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 78,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/17/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/17/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/17/high",
		},
	},

	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rear Kick",
			fr: "Ruade",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Fire Blast",
			fr: "Déflagration",
		},
		text: {
			en: "Discard a Fire Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie Fire attachée à ce Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
