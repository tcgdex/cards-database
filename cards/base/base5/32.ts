import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-32",
	localId: 32,

	// Card informations
	name: {
		en: "Dark Charmeleon",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 5,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/32/high",
		},
	},

	evolveFrom: {
		en: "Charmander",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Slap",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Fireball",
		},
		text: {
			en: "Use this attack only if there are any Energy cards attached to Dark Charmeleon. Flip a coin. If heads, discard 1 of those Energy cards. If tails, this attack does nothing (not even damage).",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
