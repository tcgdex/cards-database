import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-5",
	localId: 5,

	// Card informations
	name: {
		en: "M Heracross-EX",
		fr: "M-Scarhino-EX",
	},

	hp: 220,

	type: [
		Type.GRASS,
	],

	dexId: 214,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/5/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/5/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/5/high",
		},
	},

	evolveFrom: {
		en: "Heracross-EX",
		fr: "Scarhino-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Big Bang Horn",
			fr: "Corne Big Bang",
		},
		text: {
			en: "This attack does 180 damage minus 10 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 180 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
