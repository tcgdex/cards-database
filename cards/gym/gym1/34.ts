import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-34",
	localId: 34,

	// Card informations
	name: {
		en: "Sabrina's Venomoth",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 49,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/34/high",
		},
	},

	evolveFrom: {
		en: "Venonat",
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
			en: "Flip 3 coins. For each heads, remove 1 damage counter from each of your Pokémon. If a Pokémon has fewer damage counters than the number of heads, remove all of them.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sonic Distortion",
		},
		text: {
			en: "Flip 2 coins. If 1 or both of them are heads, the Defending Pokémon is now Confused.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
