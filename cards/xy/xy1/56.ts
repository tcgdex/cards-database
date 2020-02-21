import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-56",
	localId: 56,

	// Card informations
	name: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 710,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/56/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/56/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde Folie",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
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

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
