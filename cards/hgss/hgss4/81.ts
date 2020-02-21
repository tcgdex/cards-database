import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-81",
	localId: 81,

	// Card informations
	name: {
		en: "Venonat",
		fr: "Mimitoss",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 48,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/81/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/81/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Vampirisme",
		},
		text: {
			fr: "Retirez à Mimitoss un nombre de marqueurs de dégât équivalant aux dégâts que vous avez infligés au Pokémon Défenseur.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Charge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
