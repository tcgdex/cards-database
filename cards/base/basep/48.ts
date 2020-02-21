import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "basep-48",
	localId: 48,

	// Card informations
	name: {
		en: "Articuno",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 144,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/48/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 1128,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Aurora Veil",
		},
		text: {
			en: "As long as Articuno is your Active Pokémon, you Benched Pokémon are not affected by attacks. This power cannot be used if Articuno is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ice Beam",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 30
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
