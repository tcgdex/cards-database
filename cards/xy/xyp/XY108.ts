import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY108",
	localId: "XY108",

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
			en: "https://assets.tcgdex.net/en/xy/xyp/XY108/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY108/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY108/high",
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
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
