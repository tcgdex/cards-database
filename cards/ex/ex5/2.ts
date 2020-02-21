import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-2",
	localId: 2,

	// Card informations
	name: {
		en: "Claydol",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 344,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/2/high",
		},
	},

	evolveFrom: {
		en: "Baltoy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},

	abilities: [{
		id: 724,
		type: AbilityType.POKEBODY,
		name: {
			en: "Primal Pull",
		},
		text: {
			en: "As long as Claydol is your Active Pokémon, each player's Evolved Pokémon pays Colorless more Energy to use its attacks.\"",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Muddy Eye",
		},
		text: {
			en: "Does 10 damage times the number of basic Energy cards attached to Claydol and the Defending Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
