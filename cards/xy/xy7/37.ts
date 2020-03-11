import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-37",
	localId: 37,

	// Card informations
	name: {
		en: "Machamp-EX",
		fr: "Mackogneur-EX",
	},

	hp: 180,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/37/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/37/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Steaming Mad",
			fr: "Fou Furax",
		},
		text: {
			en: "This attack does 20 damage times the number of damage counters on this Pokémon. This Pokémon is now Confused.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon. Ce Pokémon est maintenant Confus.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Crazy Hammer",
			fr: "Marteau Fou",
		},
		text: {
			en: "If this Pokémon is affected by a Special Condition, this attack does 80 more damage. Then, remove all Special Conditions from this Pokémon.",
			fr: "Si ce Pokémon est affecté par un État Spécial, cette attaque inflige 80 dégâts supplémentaires. Ensuite, retirez tous les États Spéciaux de ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
