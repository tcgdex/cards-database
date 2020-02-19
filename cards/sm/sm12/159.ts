import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-159",
	localId: 159,

	// Card informations
	name: {
		en: "Drampa",
		fr: "Draïeul",
	},

	hp: 120,

	type: [
		Type.DRAGON,
	],

	dexId: 780,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/159/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/159/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/159/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/159/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Arcana",
			fr: "Savoir Draconique",
		},
		text: {
			en: "If this Pokémon has 2 or more different types of basic Energy attached to it, this attack does 70 more damage.",
			fr: "Si 2 types d’Énergie de base ou plus sont attachées à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

