import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-88",
	localId: 88,

	// Card informations
	name: {
		en: "M Ampharos-EX",
		fr: "M-Pharamp-EX",
	},

	hp: 220,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/88/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/88/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/88/high.png",
		},
	},

	evolveFrom: {
		en: "Ampharos-EX",
		fr: "Pharamp-EX",
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
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Exavolt",
			fr: "Exavolt",
		},
		text: {
			en: "You may do 50 more damage and leave your opponent's Active Pokémon Paralyzed. If you do, this Pokémon does 30 damage to itself.",
			fr: "Vous pouvez infliger 50 dégâts supplémentaires et laisser le Pokémon Actif de votre adversaire Paralysé. Dans ce cas, ce Pokémon s'inflige 30 dégâts.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

