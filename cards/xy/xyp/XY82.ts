import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY82",
	localId: "XY82",

	// Card informations
	name: {
		en: "Regigigas",
		fr: "Regigigas",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 486,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY82/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY82/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 723,
		type: AbilityType.TALENT,
		name: {
			en: "Earthen Awakening",
			fr: "Réveil Terrestre",
		},
		text: {
			en: "Whenever you attach an Energy card from your hand to this Pokémon, heal 20 damage from it.",
			fr: "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, soignez 20 dégâts à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gigas Punch",
		},
		text: {
			en: "Flip 2 coins. If both of them are tails, this attack does nothing.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
