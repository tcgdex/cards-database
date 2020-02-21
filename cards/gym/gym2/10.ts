import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-10",
	localId: 10,

	// Card informations
	name: {
		en: "Koga's Ditto",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 132,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Giant Growth",
		},
		text: {
			en: "Flip a coin. If heads, Koga's Ditto's maximum HP is now 80 and Koga's Ditto's Pound attack's base damage is 30 instead of 10. (Benching Koga's Ditto ends this effect.)",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pound",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
