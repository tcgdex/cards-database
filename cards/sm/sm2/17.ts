import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-17",
	localId: 17,

	// Card informations
	name: {
		en: "Turtonator",
		fr: "Boumata",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 776,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/17/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/17/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
			fr: "Plaquage",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
