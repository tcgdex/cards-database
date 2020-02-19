import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-53",
	localId: 53,

	// Card informations
	name: {
		en: "Mankey",
		fr: "Férosinge",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 56,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/53/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/53/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/53/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/53/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 12,
		name: "Sachiko Adachi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Punch",
			fr: "Koud'poing",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Karate Chop",
			fr: "Poing-Karaté",
		},
		text: {
			en: "Does 40 damage minus 10 damage for each damage counter on Mankey.",
			fr: "Inflige 40 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Férosinge.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

