import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-94",
	localId: 94,

	// Card informations
	name: {
		en: "Dusclops ex",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 356,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/94/high",
		},
	},

	evolveFrom: {
		en: "Duskull",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 934,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dark Hole",
		},
		text: {
			en: "As long as Dusclops ex is on your Bench, don't apply Darkness Weakness for all of your Pokémon in play.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Shadow Beam",
		},
		text: {
			en: "Put 2 damage counters on the Defending Pokémon for each Energy attached to Dusclops ex.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	},{
		type: Type.COLORLESS,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
