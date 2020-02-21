import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-114",
	localId: 114,

	// Card informations
	name: {
		en: "Poliwag",
		fr: "Ptitard",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 60,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/114/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/114/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Twiddle",
			fr: "Tripoter",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, le Pokémon Défenseur est maintenant Endormi.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
