import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-33",
	localId: 33,

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
			en: "https://assets.tcgdex.net/en/xy/g1/33/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/33/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 36,
		name: "kodama"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
