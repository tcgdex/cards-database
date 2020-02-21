import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-49",
	localId: 49,

	// Card informations
	name: {
		en: "Erika's Weepinbell",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 70,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/49/high",
		},
	},

	evolveFrom: {
		en: "Bellsprout",
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
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Sleep Poison",
		},
		text: {
			en: "The Defending Pokémon is now Asleep and Poisoned.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Vine Whip",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
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
