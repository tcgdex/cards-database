import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-112",
	localId: 112,

	// Card informations
	name: {
		en: "Oddish",
		fr: "Mystherbe",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 43,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/112/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/112/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Poisonpowder",
			fr: "Poudre Toxik",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
