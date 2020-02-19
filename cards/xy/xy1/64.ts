import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-64",
	localId: 64,

	// Card informations
	name: {
		en: "Solrock",
		fr: "Solaroc",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 338,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/64/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/64/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/64/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/64/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cosmic Spin",
			fr: "Pirouette Cosmique",
		},
		text: {
			en: "If Lunatone is on your Bench, this attack does 30 more damage.",
			fr: "Si Séléroc est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

