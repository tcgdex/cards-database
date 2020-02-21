import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-44",
	localId: 44,

	// Card informations
	name: {
		en: "Tangela",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 114,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},

	abilities: [{
		id: 248,
		type: AbilityType.POKEBODY,
		name: {
			en: "Reactive Healing",
		},
		text: {
			en: "Whenever you attach a React Energy card from your hand to Tangela, remove all damage counters from Tangela.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Entangling Vines",
		},
		text: {
			en: "If the Defending Pokémon is a Basic Pokémon, that Pokémon can't attack during your opponent's next turn.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gentle Wrap",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
