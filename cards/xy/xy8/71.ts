import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-71",
	localId: 71,

	// Card informations
	name: {
		en: "Woobat",
		fr: "Chovsourir",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 527,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/71/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/71/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Odor Sleuth",
			fr: "Flair",
		},
		text: {
			en: "Flip a coin. If heads, put a card from your discard pile into your hand.",
			fr: "Lancez une pièce. Si c'est face, ajoutez une carte de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
