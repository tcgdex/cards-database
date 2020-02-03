import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-45",
	localId: 45,

	// Card informations
	name: {
		en: "Erika's Gloom",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 44,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/45/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/45/high.png",
		},
	},

	evolveFrom: {
		en: "Oddish",
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
			Type.GRASS
		],
		name: {
			en: "Healing Pollen",
		},
		text: {
			en: "Flip a coin. If heads, remove 4 damage counters from Erika's Gloom. If Erika's Gloom has fewer damage counters than that, remove all of them.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Magic Pollen",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep, Confused, Paralyzed, or Poisoned (your choice).",
		},
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

