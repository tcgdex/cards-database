import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-72",
	localId: 72,

	// Card informations
	name: {
		en: "Klang",
		fr: "Clic",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 600,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/72/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/72/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/72/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/72/high.png",
		},
	},

	evolveFrom: {
		en: "Klink",
		fr: "Tic",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Vice Grip",
			fr: "Force Poigne",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Disorderly Flip",
			fr: "Renverse Désordre",
		},
		text: {
			en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

