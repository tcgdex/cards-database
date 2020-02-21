import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop7-7",
	localId: 7,

	// Card informations
	name: {
		en: "Flaaffy",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 180,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop7/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop7/7/high",
		},
	},

	evolveFrom: {
		en: "Mareep",
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
			Type.COLORLESS
		],
		name: {
			en: "Attract Current",
		},
		text: {
			en: "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electromagnetic Kick",
		},
		text: {
			en: "Flip a coin. If tails, Flaaffy does 10 damage to itself.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "POP Series 7",
		code: "pop7"
	}
}

export default card
