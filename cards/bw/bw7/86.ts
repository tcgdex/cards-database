import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-86",
	localId: 86,

	// Card informations
	name: {
		en: "Mienfoo",
		fr: "Kungfouine",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 619,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/86/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/86/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Steady Punch",
			fr: "Poing Énergétique",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
