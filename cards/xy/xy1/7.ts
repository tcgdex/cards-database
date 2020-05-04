import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-7",
	localId: 7,

	// Card informations
	name: {
		en: "Ledian",
		fr: "Coxyclaque",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 166,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/7/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/7/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/7/high",
		},
	},

	evolveFrom: {
		en: "Ledyba",
		fr: "Coxy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Mach Punch",
			fr: "Mach Punch",
		},
		text: {
			en: "This attack does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
