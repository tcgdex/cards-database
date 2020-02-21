import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM27",
	localId: "SM27",

	// Card informations
	name: {
		en: "Turtonator",
		fr: "Boumata",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 776,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM27/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM27/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM27/high",
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
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flame Cloak",
			fr: "Manteau de Feu",
		},
		text: {
			en: "Attach a Fire Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
