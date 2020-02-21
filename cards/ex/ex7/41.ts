import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-41",
	localId: 41,

	// Card informations
	name: {
		en: "Dark Pupitar",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
		Type.DARKNESS,
	],

	dexId: 247,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/41/high",
		},
	},

	evolveFrom: {
		en: "Larvitar",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 131,
		name: "Emi Miwa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Streak",
		},
		text: {
			en: "Flip a coin. If heads, each Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Tumble",
		},
		text: {
			en: "This attack's damage is not affected by Resistance.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
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
