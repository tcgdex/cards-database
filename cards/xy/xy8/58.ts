import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-58",
	localId: 58,

	// Card informations
	name: {
		en: "Gastly",
		fr: "Fantominus",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 92,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/58/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/58/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sleep Poison",
			fr: "Poison Dodo",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep and Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
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
