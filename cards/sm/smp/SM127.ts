import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM127",
	localId: "SM127",

	// Card informations
	name: {
		en: "Alolan Sandslash",
		fr: "Sablaireau d’Alola",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 28,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM127/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM127/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM127/high",
		},
	},

	evolveFrom: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Tumbling Attack",
			fr: "Attaque Trébuchante",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
