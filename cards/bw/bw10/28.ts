import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-28",
	localId: 28,

	// Card informations
	name: {
		en: "Carracosta",
		fr: "Mégapagos",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 565,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/28/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/28/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/28/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/28/high.png",
		},
	},

	evolveFrom: {
		en: "Tirtouga",
		fr: "Carapagos",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fossil Clutch",
			fr: "Munition Fossile",
		},
		text: {
			en: "You may discard an Item card that has Fossil in its name from your hand. If you do, this attack does 50 more damage.",
			fr: "Vous pouvez défausser une carte Objet qui a Fossile dans son nom de votre main. Dans ce cas, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 50
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Waterfall",
			fr: "Cascade",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

