import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY103",
	localId: "XY103",

	// Card informations
	name: {
		en: "Mawile-EX",
		fr: "Mysdibule-EX",
	},

	hp: 150,

	type: [
		Type.FAIRY,
	],

	dexId: 303,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY103/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY103/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Smack",
			fr: "Claque",
		},
		damage: 20
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Wonder Bomb",
			fr: "Bombe Miracle",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
