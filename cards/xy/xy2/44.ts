import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-44",
	localId: 44,

	// Card informations
	name: {
		en: "Skrelp",
		fr: "Venalgue",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 690,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/44/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/44/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Spit Poison",
			fr: "Crache-Venin",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
