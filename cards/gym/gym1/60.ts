import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-60",
	localId: 60,

	// Card informations
	name: {
		en: "Sabrina's Slowbro",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 80,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/60/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Naptime",
		},
		text: {
			en: "Flip a coin. If heads, remove 3 damage counters from Sabrina's Slowbro and Sabrina's Slowbro is now Asleep. If Sabrina's Slowbro has fewer damage counters than that, remove all of them.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Screaming Headbutt",
		},
		text: {
			en: "You can't use this attack during your next turn.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
