import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-8",
	localId: 8,

	// Card informations
	name: {
		en: "Dark Octillery",
	},

	hp: 70,

	type: [
		Type.WATER,
		Type.DARKNESS,
	],

	dexId: 224,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/8/high",
		},
	},

	evolveFrom: {
		en: "Remoraid",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Black Suction Cups",
		},
		text: {
			en: "Does 10 damage to each Defending Pokémon. Flip a coin. If heads, each Defending Pokémon is now Paralyzed.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ink Blast",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Energy attached to Dark Octillery but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
