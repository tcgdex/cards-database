import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-40",
	localId: 40,

	// Card informations
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 460,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/40/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/40/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/40/high.png",
		},
	},

	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ice Age",
			fr: "Période Glaciaire",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Dragon Pokémon, it is now Paralyzed.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Dragon, il est maintenant Paralysé.",
		},
		damage: 80
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frost Breath",
			fr: "Souffle Glacé",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

