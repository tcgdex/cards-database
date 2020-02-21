import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-16",
	localId: 16,

	// Card informations
	name: {
		en: "Torkoal",
		fr: "Chartor",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 324,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/16/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/16/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
		},
		text: {
			en: "Flip a coin. If tails, discard an Energy attached to this Pokémon.",
			fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
