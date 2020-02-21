import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-30",
	localId: 30,

	// Card informations
	name: {
		en: "Pidgeot",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 18,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/30/high",
		},
	},

	evolveFrom: {
		en: "Pidgeotto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Headwind",
		},
		text: {
			en: "During your opponent's next turn, the attack cost of each of the Defending Pokémon's attacks is ColorlessColorless more.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
