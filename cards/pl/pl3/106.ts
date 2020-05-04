import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-106",
	localId: 106,

	// Card informations
	name: {
		en: "Gible",
		fr: "Griknot",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 443,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/106/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/106/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sand Attack",
			fr: "Jet de sable",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
