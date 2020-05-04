import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-41",
	localId: 41,

	// Card informations
	name: {
		en: "Tauros",
		fr: "Tauros",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 128,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/41/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/41/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Smash Kick",
			fr: "Coud'pattes",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crimson Bull",
			fr: "Taurouge",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads. Tauros is now Confused.",
			fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face. Tauros est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
