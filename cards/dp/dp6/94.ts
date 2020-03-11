import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-94",
	localId: 94,

	// Card informations
	name: {
		en: "Gligar",
		fr: "Scorplane",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 207,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/94/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/94/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		name: {
			en: "Light Poison",
			fr: "Poison léger",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, the Defending Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Jump On",
			fr: "Sauter",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
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
