import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY178",
	localId: "XY178",

	// Card informations
	name: {
		en: "Absol",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 359,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY178/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY178/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},

	abilities: [{
		id: 1350,
		type: AbilityType.TALENT,
		name: {
			en: "Lamentation",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), discard a random card from your opponent's hand.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Cage",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
