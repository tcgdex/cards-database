import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-98",
	localId: 98,

	// Card informations
	name: {
		en: "M Rayquaza-EX",
		fr: "M-Rayquaza-EX",
	},

	hp: 220,

	type: [
		Type.COLORLESS,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/98/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/98/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/98/high.png",
		},
	},

	evolveFrom: {
		en: "Rayquaza-EX",
		fr: "Rayquaza-EX",
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
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Emerald Break",
			fr: "Max Θ",
		},
		text: {
			en: "This attack does 30 damage times the number of your Benched Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Bris'Émeraude",
		},
		text: {
			fr: "Cette attaque inflige 30 dégâts multipliés par le nombre de vos Pokémon de Banc.",
		},
		damage: "30×"
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

