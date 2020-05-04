import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-55",
	localId: 55,

	// Card informations
	name: {
		en: "Makuhita",
		fr: "Makuhita",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 296,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/55/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/55/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Slap Down",
			fr: "Écraser",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage plus 10 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slap Push",
			fr: "Gifle",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
