import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base2-35",
	localId: 35,

	// Card informations
	name: {
		en: "Exeggutor",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base2/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base2/35/high",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
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
			Type.PSYCHIC
		],
		name: {
			en: "Teleport",
		},
		text: {
			en: "Switch Exeggutor with 1 of your Benched Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Big Eggsplosion",
		},
		text: {
			en: "Flip a number of coins equal to the number of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Jungle",
		code: "base2"
	}
}

export default card
