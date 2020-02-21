import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-35",
	localId: 35,

	// Card informations
	name: {
		en: "M Glalie-EX",
		fr: "Méga-Oniglali-EEX",
	},

	hp: 220,

	type: [
		Type.WATER,
	],

	dexId: 362,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/35/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/35/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/35/high",
		},
	},

	evolveFrom: {
		en: "Glalie-EX",
		fr: "Oniglali-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cryo Mouth",
			fr: "Cryo Bouche",
		},
		text: {
			en: "If this Pokémon has 10 or more damage counters on it, this attack does 150 more damage.",
			fr: "Si ce Pokémon a 10 marqueurs de dégâts ou plus, cette attaque inflige 150 dégâts supplémentaires.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
