import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-54",
	localId: 54,

	// Card informations
	name: {
		en: "Lombre",
		fr: "Lombre",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 271,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/54/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/54/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/54/high",
		},
	},

	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Torment",
			fr: "Supplice",
		},
		text: {
			en: "Flip a coin. If heads, your opponent can't play any Supporter cards from his or her hand during his or her next turn.",
			fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Supporter de sa main lors de son prochain tour.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Absorb",
			fr: "Vol-vie",
		},
		text: {
			en: "Remove 2 damage counters from Lombre.",
			fr: "Retirez à Lombre 2 marqueurs de dégât.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
