import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/ex/ex9/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/94/high.png",
		},
	},

	evolveFrom: {
		en: "Duskull",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

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



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card

