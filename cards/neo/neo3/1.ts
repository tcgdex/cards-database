import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-1",
	localId: 1,

	// Card informations
	name: {
		en: "Ampharos",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/1/high",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 73,
		name: "Toshinao Aoki"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Attract Current",
		},
		text: {
			en: "Flip 3 coins. For each heads, you may search your deck for a L Energy card and attach it to 1 of your L Pokémon. Shuffle your deck afterward.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Gigavolt",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, this attack does 40 damage and the Defending Pokémon is now Paralyzed.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
