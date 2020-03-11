import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-34",
	localId: 34,

	// Card informations
	name: {
		en: "Golett",
		fr: "Gringolem",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 622,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/34/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/34/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/34/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Smash Punch",
			fr: "Poing Écrasant",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
