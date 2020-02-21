import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-49",
	localId: 49,

	// Card informations
	name: {
		en: "Drowzee",
		fr: "Soporifik",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 96,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/49/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/49/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras’Face",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
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
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
