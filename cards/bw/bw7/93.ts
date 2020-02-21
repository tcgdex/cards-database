import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-93",
	localId: 93,

	// Card informations
	name: {
		en: "Mandibuzz",
		fr: "Vaututrice",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 630,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/93/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/93/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/93/high",
		},
	},

	evolveFrom: {
		en: "Vullaby",
		fr: "Vostourno",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dual Cut",
			fr: "Coupe Double",
		},
		text: {
			en: "Flip 2 coins. This attack does 80 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 80
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
