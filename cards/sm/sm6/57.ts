import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-57",
	localId: 57,

	// Card informations
	name: {
		en: "Cubone",
		fr: "Osselait",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 104,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/57/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/57/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/57/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 96,
		name: "sowsow"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Burdensome Bone",
			fr: "Os Pesant",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
