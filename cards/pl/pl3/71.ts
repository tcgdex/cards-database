import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-71",
	localId: 71,

	// Card informations
	name: {
		en: "Minun",
		fr: "Negapi",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 312,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/71/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/71/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		name: {
			en: "Call for Family",
			fr: "Appel à la famille",
		},
		text: {
			en: "Search your deck for up to 2 Lightning Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck jusqu'à 2 Pokémon de Base Lightning et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Trash Charge",
			fr: "Charge d'ordures",
		},
		text: {
			en: "Search your discard pile for a Lightning Energy card and attach it to 1 of your Pokémon.",
			fr: "Cherchez dans votre pile de défausse une carte Énergie Lightning et attachez-la à 1 de vos Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
