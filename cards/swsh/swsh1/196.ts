import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-196",
	localId: 196,

	// Card informations
	name: {
		en: "Zamazenta V",
	},

	hp: 230,

	type: [
		Type.METAL,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/196/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/196/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],



	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Dauntless Shield",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon VMAX.",
		}
	}],

	attacks: [{
		name: {
			en: "V rule",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Assault Tackle",
		},
		text: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

