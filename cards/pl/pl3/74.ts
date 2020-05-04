import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-74",
	localId: 74,

	// Card informations
	name: {
		en: "Numel",
		fr: "Chamallot",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 322,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/74/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/74/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Draw In",
			fr: "Attirer",
		},
		text: {
			en: "Search your discard pile for up to 2 Fire Energy cards and attach them to Numel.",
			fr: "Cherchez dans votre pile de défausse jusqu'à 2 cartes Énergie Fire et attachez-les à Chamallot.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
