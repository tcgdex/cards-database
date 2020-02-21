import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-106",
	localId: 106,

	// Card informations
	name: {
		en: "M Gardevoir-EX",
		fr: "M-Gardevoir-EX",
	},

	hp: 210,

	type: [
		Type.FAIRY,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/106/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/106/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/106/high",
		},
	},

	evolveFrom: {
		en: "Gardevoir-EX",
		fr: "Gardevoir-EX",
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
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brilliant Arrow",
			fr: "Flèche Éclatante",
		},
		text: {
			en: "This attack does 30 damage times the amount of Fairy Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Fairy attachées à tous vos Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
