import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-20",
	localId: 20,

	// Card informations
	name: {
		en: "Dark Blastoise",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/20/high",
		},
	},

	evolveFrom: {
		en: "Wartortle",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Hydrocannon",
		},
		text: {
			en: "Does 30 damage plus 20 more damage for each W Energy attached to Dark Blastoise but not used to pay for this attack. You can't add more than 40 damage in this way.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rocket Tackle",
		},
		text: {
			en: "Dark Blastoise does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Dark Blastoise during your opponent's next turn. (Any other effects of attacks still happen.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
