import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-67",
	localId: 67,

	// Card informations
	name: {
		en: "Machop",
		fr: "Machoc",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 66,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/67/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/67/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Steady Punch",
			fr: "Poing énergétique",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Mach Cross",
			fr: "Passage éclair",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
