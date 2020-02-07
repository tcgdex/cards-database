import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-99",
	localId: 99,

	// Card informations
	name: {
		en: "Rhyperior",
	},

	hp: 190,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/99/high.png",
		},
	},

	evolveFrom: {
		en: "Rhydon",
	},

	tags: [
		Tag.STAGE2,
	],





	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Tumble",
		},
		text: {
			en: "This attack’s damage isn’t affected by Resistance.",
		},
		damage: 90
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bedrock Shake",
		},
		text: {
			en: "This attack also does 60 damage to each Benched Pokémon that has any damage counters on it (both yours and your opponent's). (Don’t apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

