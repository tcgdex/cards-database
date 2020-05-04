import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-85",
	localId: 85,

	// Card informations
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 50,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/85/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/85/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Takao Unno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Down Draw",
			fr: "Pioche du dessous",
		},
		text: {
			en: "Draw a card from the bottom of your deck.",
			fr: "Piochez une carte du dessous de votre deck.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Mud Spatter",
			fr: "Éclaboussure de boue",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
