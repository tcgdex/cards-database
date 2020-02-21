import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-70",
	localId: 70,

	// Card informations
	name: {
		en: "Tentacool",
		fr: "Tentacool",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 72,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/70/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/70/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lost in the Waves",
			fr: "Porté Disparu",
		},
		text: {
			en: "Return this Pokémon and all cards attached to it to your hand.",
			fr: "Reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
