import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-SH8",
	localId: "SH8",

	// Card informations
	name: {
		en: "Relicanth",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 369,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/SH8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/SH8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Deep Sea Pressure",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon's Retreat Cost is Colorless Colorless more.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Wave",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage plus 10 more damage for each heads.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
