import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-70",
	localId: 70,

	// Card informations
	name: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 32,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/70/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/70/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pheromone Poison",
			fr: "Poison de phéromones",
		},
		text: {
			en: "If Nidoran♀ is on your Bench, the Defending Pokémon is now Poisoned.",
			fr: "Si Nidoran♀ est sur votre Banc, le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Attack",
			fr: "Koud'korne",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
