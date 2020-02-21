import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-2",
	localId: 2,

	// Card informations
	name: {
		en: "M Venusaur-EX",
		fr: "M-Florizarre-EX",
	},

	hp: 230,

	type: [
		Type.GRASS,
	],

	dexId: 3,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/2/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/2/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/2/high",
		},
	},

	evolveFrom: {
		en: "Venusaur-EX",
		fr: "Florizarre-EX",
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
			Type.GRASS,
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Crisis Vine",
			fr: "Crise-Lianes",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Paralyzed and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
