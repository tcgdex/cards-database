import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-45",
	localId: 45,

	// Card informations
	name: {
		en: "Shelgon",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 372,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/45/high",
		},
	},

	evolveFrom: {
		en: "Bagon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},

	abilities: [{
		id: 791,
		type: AbilityType.POKEBODY,
		name: {
			en: "Hard Protection",
		},
		text: {
			en: "Prevent all damage done to Shelgon by attacks from your Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.FIRE
		],
		name: {
			en: "Rock Smash",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIRE,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
