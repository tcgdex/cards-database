import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-H31",
	localId: "H31",

	// Card informations
	name: {
		en: "Vileplume",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 45,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H31/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poison Scent",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned and Confused. If tails, the Defending Pokémon is now Poisoned and Asleep.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Addictive Pollen",
		},
		text: {
			en: "Flip a coin. If heads, your opponent can't play Supporter cards during his or her next turn.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
