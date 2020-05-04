import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-64",
	localId: 64,

	// Card informations
	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 603,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/64/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/64/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/64/high",
		},
	},

	evolveFrom: {
		en: "Tynamo",
		fr: "Anchwatt",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",

	abilities: [{
		id: -1,
		type: AbilityType.ANCIENTTRAIT,
		name: {
			fr: "Régénération α",
		},
		text: {
			fr: "Lorsque ce Pokémon est soigné, doublez la quantité de soins.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thrash",
			fr: "Mania",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires. Si c’est pile, ce Pokémon s’inflige 20 dégâts.",
		},
		damage: 50
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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
