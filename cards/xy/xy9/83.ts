import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-83",
	localId: 83,

	// Card informations
	name: {
		en: "Togekiss-EX",
		fr: "Togekiss-EX",
	},

	hp: 170,

	type: [
		Type.FAIRY,
	],

	dexId: 468,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/83/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/83/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Mighty Wind",
			fr: "Vent Redoutable",
		},
		text: {
			en: "You may attach an Energy card from your hand to 1 of your Benched Pokémon.",
			fr: "Vous pouvez attacher une carte Énergie de votre main à l'un de vos Pokémon de Banc.",
		},
		damage: 20
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hurricane Wing",
			fr: "Tornad'Aile",
		},
		text: {
			en: "Flip 4 coins. This attack does 50 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
