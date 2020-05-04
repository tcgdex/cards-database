import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-95",
	localId: 95,

	// Card informations
	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/95/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/95/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Coordinated Beatdown",
			fr: "Dérouillée Coordonnée",
		},
		text: {
			en: "If Hitmonlee is on your Bench, this attack does 20 more damage.",
			fr: "Si Kicklee est sur votre Banc, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: "20+"
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Mach Cross",
			fr: "Passage Éclair",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
