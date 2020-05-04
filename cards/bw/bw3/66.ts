import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-66",
	localId: 66,

	// Card informations
	name: {
		en: "Archen",
		fr: "Arkéapti",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 566,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/66/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/66/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Acrobatics",
			fr: "Acrobatie",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
