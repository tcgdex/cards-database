import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-39",
	localId: 39,

	// Card informations
	name: {
		en: "Quagsire",
		fr: "Maraiste",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 195,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/39/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/39/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/39/high",
		},
	},

	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Landslide",
			fr: "Glissement de Terrain",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
