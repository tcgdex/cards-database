import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-93",
	localId: 93,

	// Card informations
	name: {
		en: "Magmar",
		fr: "Magmar",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 126,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/93/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/93/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/93/high",
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
			en: "Fire Punch",
			fr: "Poing de feu",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Smog",
			fr: "Purédpois",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
