import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-55",
	localId: 55,

	// Card informations
	name: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	hp: 40,

	type: [
		Type.FAIRY,
	],

	dexId: 546,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/55/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/55/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Cotton Bed",
			fr: "Lit de Plumes",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
