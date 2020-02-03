import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-52",
	localId: 52,

	// Card informations
	name: {
		en: "Zeraora",
		fr: "Zeraora",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 807,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/52/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/52/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/52/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/52/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Wild Charge",
			fr: "Éclair Fou",
		},
		text: {
			en: "This Pokémon does 20 damage to itself.",
			fr: "Ce Pokémon s’inflige 20 dégâts.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

