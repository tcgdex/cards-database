import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp3/54/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/54/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/54/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/54/high.png",
		},
	},

	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



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

