import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-34",
	localId: 34,

	// Card informations
	name: {
		en: "Dark Golbat",
	},

	hp: 70,

	type: [
		Type.GRASS,
		Type.DARKNESS,
	],

	dexId: 42,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/34/high",
		},
	},

	evolveFrom: {
		en: "Zubat",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Night Ambush",
		},
		text: {
			en: "Does 30 damage to 1 of your opponent's Pokémon. Dark Golbat can't attack during your next turn. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
