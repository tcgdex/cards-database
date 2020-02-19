import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-103",
	localId: 103,

	// Card informations
	name: {
		en: "Azumarill",
		fr: "Azumarill",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 184,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/103/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/103/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/103/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/103/high.png",
		},
	},

	evolveFrom: {
		en: "Marill",
		fr: "Marill",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bubble Beam",
			fr: "Bulles d'O",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Superpower",
			fr: "Surpuissance",
		},
		text: {
			en: "You may do 30 more damage. If you do, this Pokémon does 30 damage to itself.",
			fr: "Vous pouvez infliger 30 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 30 dégâts.",
		},
		damage: 60
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

