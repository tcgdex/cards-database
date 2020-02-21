import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-39",
	localId: 39,

	// Card informations
	name: {
		en: "Loudred",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 294,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/39/high",
		},
	},

	evolveFrom: {
		en: "Whismur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cracking Punch",
		},
		text: {
			en: "Flip a coin. If heads, each Defending Pokémon is now Confused.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Light Punch",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
