import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-11",
	localId: 11,

	// Card informations
	name: {
		en: "Gyarados",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/11/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/11/high.png",
		},
	},

	evolveFrom: {
		en: "Magikarp",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 120,
		name: "Kimiya Masago"
	},

	abilities: [{
		id: 1018,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Flame Vapor",
		},
		text: {
			en: "When you play Gyarados from your hand to evolve your Active Pokémon, you may flip 2 coins. For each heads, discard an Energy card attached to the Defending Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon's Vengeance",
		},
		text: {
			en: "If Gyarados has 7 or more damage counters on it, this attack's base damage is 100.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card

