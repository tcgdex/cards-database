import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-12",
	localId: 12,

	// Card informations
	name: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
	},

	hp: 180,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/12/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/12/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/12/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-Aile",
		},
		damage: 60
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Combustion Blast",
			fr: "Explo-Combustion",
		},
		text: {
			en: "This Pokémon can't use Combustion Blast during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Explo-Combustion pendant votre prochain tour.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card

