import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-64",
	localId: 64,

	// Card informations
	name: {
		en: "Cranidos",
		fr: "Kranidos",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 408,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/64/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/64/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/64/high",
		},
	},

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Headstrike",
			fr: "Coup de Tête",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
