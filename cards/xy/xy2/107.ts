import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-107",
	localId: 107,

	// Card informations
	name: {
		en: "M Charizard-EX",
		fr: "M Dracaufeu-EX",
	},

	hp: 220,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/107/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/107/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/107/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/107/high.png",
		},
	},

	evolveFrom: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
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
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crimson Dive",
			fr: "Règle des Méga-Évolutions",
		},
		text: {
			en: "This Pokémon does 50 damage to itself.",
		},
		damage: 300
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Plongeon Écarlate",
		},
		text: {
			fr: "Ce Pokémon s'inflige 50 dégâts.",
		},
		damage: 300
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card

