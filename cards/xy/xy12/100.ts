import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-100",
	localId: 100,

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
			en: "https://assets.tcgdex.net/en/xy/xy12/100/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/100/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/100/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/100/high.png",
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

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card

