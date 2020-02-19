import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-16",
	localId: 16,

	// Card informations
	name: {
		en: "Spewpa",
		fr: "Pérégrain",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 665,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/16/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/16/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/16/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/16/high.png",
		},
	},

	evolveFrom: {
		en: "Scatterbug",
		fr: "Lépidonille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bug Bite",
			fr: "Piqûre",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stun Spore",
			fr: "Para-Spore",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

