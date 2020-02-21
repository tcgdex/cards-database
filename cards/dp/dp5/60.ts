import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-60",
	localId: 60,

	// Card informations
	name: {
		en: "Croagunk",
		fr: "Cradopaud",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 453,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/60/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/60/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Light Punch",
			fr: "Poing léger",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-venin",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
