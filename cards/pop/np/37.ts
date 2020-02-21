import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "np-37",
	localId: 37,

	// Card informations
	name: {
		en: "Kyogre ex",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 963,
		type: AbilityType.POKEBODY,
		name: {
			en: "Frenzy",
		},
		text: {
			en: "As long as your opponent has Groudon, Groudon ex, Rayquaza, or Rayquaza ex in play, Kyogre ex's attacks do 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Supply",
		},
		text: {
			en: "You may attach a basic Energy card from your hand to 1 of your Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Tsunami",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
