import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-17",
	localId: 17,

	// Card informations
	name: {
		en: "Fletchinder",
		fr: "Braisillon",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 662,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/17/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/17/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/17/high",
		},
	},

	evolveFrom: {
		en: "Fletchling",
		fr: "Passerouge",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Firebreathing",
			fr: "Souffle-Feu",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
