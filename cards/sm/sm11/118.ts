import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-118",
	localId: 118,

	// Card informations
	name: {
		en: "Drilbur",
		fr: "Rototaupe",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 529,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/118/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/118/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/118/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/118/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Dig Claws",
			fr: "Creusogriffes",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

