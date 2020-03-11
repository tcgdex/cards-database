import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY49",
	localId: "XY49",

	// Card informations
	name: {
		en: "Regirock",
		fr: "Regirock",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 377,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY49/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY49/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Land Maker",
			fr: "Fabric'Roc",
		},
		text: {
			en: "Put 2 Stadium cards from your discard pile into your hand.",
			fr: "Ajoutez 2 cartes Stade de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Stone Edge",
			fr: "Lame de Roc",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
