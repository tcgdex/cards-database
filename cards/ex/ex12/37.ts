import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-37",
	localId: 37,

	// Card informations
	name: {
		en: "Kecleon",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 352,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},

	abilities: [{
		id: 243,
		type: AbilityType.POKEBODY,
		name: {
			en: "Reactive Colors",
		},
		text: {
			en: "If Kecleon has any React Energy cards attached to it, Kecleon is Grass, Fire, Water, Lightning, Psychic, and Fighting type.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tongue Whip",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
