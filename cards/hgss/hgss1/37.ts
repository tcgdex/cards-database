import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-37",
	localId: 37,

	// Card informations
	name: {
		en: "Corsola",
		fr: "Corayon",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 222,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/37/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/37/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/37/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/37/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Recover",
			fr: "Soin",
		},
		text: {
			en: "Discard a Water Energy attached to Corsola and remove all damage counters from Corsola.",
			fr: "Défaussez une carte Énergie Water attachée à Corayon et retirez tous les marqueurs de dégâts sur Corayon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Cannon",
			fr: "Hyper canon",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, this attack does 20 damage plus 50 more damage.",
			fr: "Lancez 2 pièces. Si les deux pièces tombent sur face, cette attaque inflige 20 dégâts plus 50 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card

