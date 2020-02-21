import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-23",
	localId: 23,

	// Card informations
	name: {
		en: "Muk",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/23/high",
		},
	},

	evolveFrom: {
		en: "Grimer",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 389,
		type: AbilityType.POKEBODY,
		name: {
			en: "Heavyweight",
		},
		text: {
			en: "As long as there is a Grass Energy attached to Muk, you must pay an additional ColorlessColorless to retreat it.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Burning Sludge",
		},
		text: {
			en: "Flip a number of coins equal to the amount of Energy attached to Muk. If any of them are heads, the Defending Pokémon is now Poisoned and Burned.",
		},
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
